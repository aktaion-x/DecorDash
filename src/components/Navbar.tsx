import {Link} from 'react-router-dom';

const Navbar = () => {
  console.log("asd")
  return (
  <div className="Navbar">
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-6">
        <Link to="/">Logo</Link>
        <ul className="flex justify-center items-center gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/view-cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-2">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div>
    </div>
  </div>
  )
}
export default Navbar; 
