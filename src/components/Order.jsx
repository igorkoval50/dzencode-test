const Order = ({id, title, date, description}) => {
    return (
        <div id={id} className="order">
           <h4>{title}</h4>
        </div>
    );
}

export default Order;