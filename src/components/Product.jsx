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

    return (
        <div className="container mt-4">
            <table className="table">
                <tbody>
                <tr>
                    <td>{isNew ? 'Yes' : 'No'}</td>
                    <td><img src={photo} alt={title} className="img-fluid" style={{maxWidth: "100px"}}/></td>
                    <td>{title}</td>
                    <td>{date}</td>
                    <td>{guarantee?.start}</td>
                    <td>{guarantee?.end}</td>
                    <td>{order}</td>
                    <td>
                        {price.map((priceValue, index) => (
                            <span key={index}>{priceValue.symbol}{index !== price.length - 1 && ", "}</span>
                        ))}
                    </td>
                    <td>{serialNumber}</td>
                    <td>{specification}</td>
                    <td>{type}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Product;
