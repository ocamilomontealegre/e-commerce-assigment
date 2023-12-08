import { useState } from 'react';
import { useCart } from '../cart/CartContext.jsx';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';

const CartSummary = () => {
  const { cartItems } = useCart();
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const history = useHistory();

  const getTotalPrice = () => cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = async () => {
    const apiUrl = 'https://localhost:3000/registerTransaction';
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('User not authenticated');
      return;
    }

    const checkoutPayload = { item: 'Some items', price: getTotalPrice() };
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const response = await axios.post(apiUrl, checkoutPayload, headers);
      console.log('Checkout successful:', response.data);
      setCheckoutStatus('success');

      setTimeout(() => {
        history.push('/');
      }, 3000); // Wait for 3 seconds before redirecting
    } catch (error) {
      console.error('Error during checkout:', error.message);
      setCheckoutStatus('error');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-lg rounded">
        <h2 className="mb-4 text-center">🛒 Cart Summary</h2>
        {cartItems && cartItems.length > 0 ? (
          <div>
            <ul className="list-unstyled">
              {cartItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <span className="fw-bold">{item.name}</span> - {item.price} USD
                </li>
              ))}
            </ul>
            <p className="text-center fw-bold">Total Price: {getTotalPrice()} USD</p>
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
            {checkoutStatus === 'success' && (
              <p className="text-center text-success mt-2">Checkout successful! 🎉</p>
            )}
            {checkoutStatus === 'error' && (
              <p className="text-center text-danger mt-2">Error during checkout. Please try again. 😞</p>
            )}
          </div>
        ) : (
          <p className="text-center">Your cart is empty. 🛒</p>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
