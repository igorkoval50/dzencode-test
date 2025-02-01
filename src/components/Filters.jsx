const Filters = ({ orders }) => {
    const products = orders.flatMap(order => order.products);
    const uniqueTypes = [...new Set(products.map(product => product.type))];
    const uniqueSpecifications = [...new Set(products.map(product => product.specification))];

    return (
        <div className="filter">
            <div className="filter-product">
                <h3>Продукты / {products.length} </h3>
            </div>

            {/* Type Filter Dropdown */}
            <div className="filter-type">
                <span>Тип</span>
                <select name="type" id="type">
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
                <select name="specification" id="specification">
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