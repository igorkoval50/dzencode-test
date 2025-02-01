import { useEffect, useState, useMemo } from "react";

const Filters = ({ orders, onTypeChange, onSpecificationChange }) => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedSpecification, setSelectedSpecification] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Memoize the products array to prevent recalculating on every render
    const products = useMemo(() => orders.flatMap(order => order.products), [orders]);
    const uniqueTypes = useMemo(() => [...new Set(products.map(product => product.type))], [products]);
    const uniqueSpecifications = useMemo(() => [...new Set(products.map(product => product.specification))], [products]);

    // Update filtered products based on selected filters
    useEffect(() => {
        let filtered = products;
        
        if (selectedType) {
            filtered = filtered.filter(product => product.type === selectedType);
        }

        if (selectedSpecification) {
            filtered = filtered.filter(product => product.specification === selectedSpecification);
        }

        setFilteredProducts(filtered); // Update the filtered products state
    }, [selectedType, selectedSpecification, products]); // Only depend on the state that actually changes

    const handleTypeChange = (value) => {
        setSelectedType(value);
        onTypeChange(value); // Notify parent component
    };

    const handleSpecificationChange = (value) => {
        setSelectedSpecification(value);
        onSpecificationChange(value); // Notify parent component
    };

    return (
        <div className="filter">
            <div className="filter-product">
                <h3>Продукты / {filteredProducts.length} </h3> {/* Show filtered length */}
            </div>

            {/* Type Filter Dropdown */}
            <div className="filter-type">
                <span>Тип</span>
                <select
                    name="type"
                    id="type"
                    value={selectedType}
                    onChange={(e) => handleTypeChange(e.target.value)} // Update the local state
                >
                    <option value="">All Types</option>
                    {uniqueTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Specification Filter Dropdown */}
            <div className="filter-specification">
                <span>Спецификация</span>
                <select
                    name="specification"
                    id="specification"
                    value={selectedSpecification}
                    onChange={(e) => handleSpecificationChange(e.target.value)} // Update the local state
                >
                    <option value="">All Specifications</option>
                    {uniqueSpecifications.map((specification, index) => (
                        <option key={index} value={specification}>
                            {specification}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filters;