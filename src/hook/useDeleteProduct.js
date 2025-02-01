const useDeleteProduct = (setOrders) => {
    const handleDeleteProduct = (id) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => ({
                ...order,
                products: order.products.filter((product) => product.id !== id),
            }))
        );
    };

    return { handleDeleteProduct };
};

export default useDeleteProduct;
