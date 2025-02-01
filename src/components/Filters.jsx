import { useEffect, useState } from "react";

const Filters = ({ orders, onTypeChange, onSpecificationChange }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [selectedSpecification, setSelectedSpecification] = useState("");

    const products = orders.flatMap(order => order.products);
    const uniqueTypes = [...new Set(products.map(product => product.type))];
    const uniqueSpecifications = [...new Set(products.map(product => product.specification))];

    // Update filtered products based on selected filters
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
                    onChange={(e) => {
                        const newType = e.target.value;
                        setSelectedType(newType); // Update selected type
                        onTypeChange(newType); // Notify parent component
                    }}
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
                    onChange={(e) => {
                        const newSpec = e.target.value;
                        setSelectedSpecification(newSpec); // Update selected specification
                        onSpecificationChange(newSpec); // Notify parent component
                    }}
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
