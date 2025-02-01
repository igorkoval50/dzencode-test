import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import useDateFormatter from '../hook/useDateFormatter.js';
import Modal from './Modal.jsx'; // Import the Modal component

const Product = ({ product, onDelete }) => {
    const {
        id,
        date,
        guarantee,
        isNew,
        photo,
        price,
        serialNumber,
        title,
        type,
    } = product;

    const { formatDate, formatDateDay } = useDateFormatter();
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Function to open the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle product deletion
    const handleDeleteProduct = () => {
        onDelete(id);
        setIsModalOpen(false);
    };

    return (
        <div className="product-wrapper mt-2" id={id}>
            <table className="table product">
                <tbody>
                <tr>
                    {/* Product status */}
                    <td className={`product__status product__status--${isNew ? 'new' : 'old'}`}></td>

                    {/* Product image */}
                    <td>
                        <img src={photo} alt={title} className="product__image img-fluid" />
                    </td>

                    {/* Product title and serial */}
                    <td>
                        <span className="product__title">{title}</span>
                        <br />
                        <span className="product__serial">SN-{serialNumber}</span>
                    </td>

                    {/* Product condition (new or used) */}
                    <td className={`product__condition product__condition--${isNew ? 'new' : 'old'}`}>
                        {isNew ? 'Новый' : 'Б / У'}
                    </td>

                    {/* Product price */}
                    <td className="product__price">
                        {price.map((priceEl, index) => (
                            <span key={index}>
                                    {/* Display USD price */}
                                {priceEl.symbol === 'USD' && (
                                    <span className="product__price-value product__price-value--usd">
                                            {priceEl.value} $
                                        </span>
                                )}

                                {/* Display UAH price */}
                                {priceEl.symbol === 'UAH' && (
                                    <span className="product__price-value product__price-value--uah">
                                            {priceEl.value} UAH
                                        </span>
                                )}

                                {/* Line break between prices */}
                                {index !== price.length - 1 && <br />}
                                </span>
                        ))}
                    </td>

                    {/* Product guarantee */}
                    <td className="product__guarantee">
                        <small>C </small>
                        <span>{formatDateDay(guarantee?.start)}</span>
                        <br />
                        <small>По </small>
                        <span>{formatDateDay(guarantee?.end)}</span>
                    </td>

                    {/* Product date */}
                    <td>{formatDate(date)}</td>

                    {/* Add to cart button */}
                    <td>
                        <button className="product__button" onClick={handleOpenModal}>
                            <i className="bi bi-cart"></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            {/* Modal for delete confirmation */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleDeleteProduct}
                product={product}
            />
        </div>
    );
};

export default Product;