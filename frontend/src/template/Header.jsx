import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartSummary from "../cart/CartSummary.jsx";
import { useCart } from "../cart/CartContext.jsx";

function NavigationLinks({ cartCount, changeNav, openedDrawer, cartItems }) {
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setTokenExists(!!token);
  }, []);

  return (
    <>
      {tokenExists && (
        <Link to="/cart" className="btn btn-outline-dark me-3 d-none d-lg-inline ms-auto">
          <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
          <span className="ms-3 badge rounded-pill bg-dark">{cartCount}</span>
        </Link>
      )}
      <div className="cart-summary-container">
        {openedDrawer && tokenExists && <CartSummary cartItems={cartItems} />}
      </div>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          {tokenExists ? (
            <span className="nav-link">
              User Authenticated
            </span>
          ) : (
            <>
              <a href="!#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={["fas", "user-alt"]} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <Link to="/login" className="dropdown-item" onClick={changeNav}>Login</Link>
                </li>
                <li>
                  <Link to="/register" className="dropdown-item" onClick={changeNav}>Sign Up</Link>
                </li>
              </ul>
            </>
          )}
        </li>
      </ul>
    </>
  );
}

function MobileButtons({ cartCount, toggleDrawer }) {
  return (
    <div className="d-inline-block d-lg-none">
      <button type="button" className="btn btn-outline-dark">
        <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
        <span className="ms-3 badge rounded-pill bg-dark">{cartCount}</span>
      </button>
      <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
}

function Header() {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const { cartCount, cartItems } = useCart();

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav() {
    if (openedDrawer) {
      setOpenedDrawer(false);
    }
  }

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/" onClick={changeNav}>
            <FontAwesomeIcon icon={["fas", "shoe-prints"]} className="ms-1" size="lg" />
            <span className="ms-2 h5">My E-commerce</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? "open" : "")}>
            <NavigationLinks cartCount={cartCount} changeNav={changeNav} openedDrawer={openedDrawer} cartItems={cartItems} />
          </div>

          <MobileButtons cartCount={cartCount} toggleDrawer={toggleDrawer} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
