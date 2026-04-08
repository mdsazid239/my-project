import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#ff5200] text-white">
      
      {/* Left - Logo */} 
      <div className="flex items-center gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
          alt="logo"
          className="w-10 bg-white p-1 rounded-xl"
        />
        <h1 className="text-2xl font-bold">Swiggy</h1>
      </div>

      {/* Right - Menu */}
      <div className="flex items-center gap-8 text-[15px] font-medium">
        
        <Link to="/" className="hover:underline">
          Swiggy Corporate
        </Link>

        <Link to="/" className="hover:underline">
          Partner with us
        </Link>

        {/* Get App Button */}
        <button className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-[#ff5200] transition">
          Get the App ↗
        </button>

        {/* Sign In Button */}
        <button className="bg-black px-6 py-2 rounded-xl hover:bg-gray-900 transition">
          Sign in
        </button>

      </div>
    </nav>
  );
}

export default Navbar;