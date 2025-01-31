const Order = ({id, title, date, description}) => {
    return (
        <div id={id} className="order">
            <p>{title}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
}

export default Order;