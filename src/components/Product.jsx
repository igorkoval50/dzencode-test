const Product = ({ product }) => {
    const {
        id,
        date,
        guarantee,  // This is correct
        isNew,
        order,
        photo,
        price,
        serialNumber,
        specification,
        title,
        type
    } = product;

    console.log(product);

    console.log(guarantee?.start);  // Access guarantee safely
    console.log(guarantee?.end);    // Access guarantee safely

    return (
        <div id={id} className="product">
            <img src={photo} alt={title} />
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Guarantee:</strong> start: {guarantee?.start} end: {guarantee?.end}</p>
            <p><strong>New:</strong> {isNew ? 'Yes' : 'No'}</p>
            <p><strong>Order:</strong> {order}</p>
            {/*<p><strong>Price:</strong> {price}</p>*/}
            <p><strong>Serial Number:</strong> {serialNumber}</p>
            <p><strong>Specification:</strong> {specification}</p>
            <p><strong>Type:</strong> {type}</p>
        </div>
    );
};

export default Product;
