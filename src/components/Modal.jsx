const Modal = ({ isOpen, onClose, onConfirm, product }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="mdoal-body">
                    <p><strong>Вы уверены, что хотите удалить этот продукт?</strong></p>
                    <div className="modal-product">
                        <span className={`product__condition product__condition--${product.isNew ? 'new' : 'old'}`}></span>

                        <img src={product.photo} alt={product.title} className="modal-image"/>
                        <div className="product-info">
                            <strong className="product-name">{product.title}</strong>
                            <p className="product-serial">SN-{product.serialNumber}</p>
                        </div>
                    </div>
                </div>

                <div className="modal-buttons">
                    <button onClick={onClose} className="modal-button modal-button-cancel">
                    Отмена
                    </button>
                    <button onClick={onConfirm} className="modal-button modal-button-delete">
                        Удалить
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;
