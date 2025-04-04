import { useNavigate, } from 'react-router-dom';

export default function Hello() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Remote Component</h2>
      <p>Current path: {location.pathname}</p>
      <button onClick={() => navigate('/contact')}>Go to contact</button>
    </div>
  );
}