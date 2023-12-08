import { Link } from 'react-router-dom';

const AuthButton = ({ buttonText, to }) => {
  const buttonClass = `btn btn-lg rounded-pill px-4 py-2 ${to === '/login' ? 'btn-success' : 'btn-primary'}`;

  return (
    <Link to={to} className={`${buttonClass} m-2`}>
      {buttonText}
    </Link>
  );
};

export default AuthButton;

