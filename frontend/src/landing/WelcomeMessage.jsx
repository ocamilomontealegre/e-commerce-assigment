import AuthButton from "../utilities/AuthButton.jsx";

const WelcomeMessage = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-4">Welcome to the Best Shoes E-Commerce</h1>
        <p className="lead">
          Please sign up or log in to explore our amazing collection!
        </p>
        <div className="mt-4">
          <AuthButton buttonText="Sign Up" to="/register" />
          <AuthButton buttonText="Log In" to="/login" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
