import { useEffect, useState, useMemo } from "react";

const Filters = ({ orders, onTypeChange, onSpecificationChange }) => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedSpecification, setSelectedSpecification] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useMemo(() => orders.flatMap(order => order.products), [orders]);
    const uniqueTypes = useMemo(() => [...new Set(products.map(product => product.type))], [products]);
    const uniqueSpecifications = useMemo(() => [...new Set(products.map(product => product.specification))], [products]);

    useEffect(() => {
        let filtered = products;

        if (selectedType) {
            filtered = filtered.filter(product => product.type === selectedType);
        }

        if (selectedSpecification) {
            filtered = filtered.filter(product => product.specification === selectedSpecification);
        }

        setFilteredProducts(filtered);
    }, [selectedType, selectedSpecification, products]);

    const handleTypeChange = (value) => {
        setSelectedType(value);
        onTypeChange(value);
    };

    const handleSpecificationChange = (value) => {
        setSelectedSpecification(value);
        onSpecificationChange(value);
    };

    return (
        <div className="filter">
            <div className="filter-product">
                <h3>Приходы / {filteredProducts.length} </h3>
            </div>

            {/* Type Filter Dropdown */}
            <div className="filter-type">
                <span>Тип</span>
                <select
                    name="type"
                    id="type"
                    value={selectedType}
                    onChange={(e) => handleTypeChange(e.target.value)}>
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
                    onChange={(e) => handleSpecificationChange(e.target.value)}>
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