import AuthButton from "../utilities/AuthButton.jsx";

const InstructionList = () => {
  return (
    <div className="container mt-5">
      <h2>Instruction List</h2>
      <ul className="list-group">
        <li className="list-group-item">👉 Register into the site</li>
        <li className="list-group-item">👉 Log into your account</li>
        <li className="list-group-item">👉 Select the products you want</li>
        <li className="list-group-item">👉 Go to the cart and check out</li>
      </ul>
    </div>
  );
};

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
        <InstructionList></InstructionList>
      </div>
    </div>
  );
};

export default WelcomeMessage;
