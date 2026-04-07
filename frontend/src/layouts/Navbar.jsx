import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h2 className="text-orange-500 font-bold">Swiggy Clone</h2>
      <div>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;