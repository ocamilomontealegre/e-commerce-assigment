import { useCart } from '../cart/CartContext.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function FeatureProduct() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://e-commerce-assignment.onrender.com/products';
        const response = await axios.get(apiUrl);
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card shadow-sm">
              <img
                className="card-img-top bg-dark cover"
                height="240"
                alt=""
                src={product.picture}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{product.name}</h5>
                <p className="card-text text-center text-muted">{`${product.price} USD`}</p>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureProduct;
