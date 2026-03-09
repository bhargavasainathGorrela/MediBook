import React from "react";

const Header = () => {
  return (
    <header className=" bg-gray-800 text-white p-4 flex justify-between items-center">
      
      {/* Logo / Title */}
      <h1 className="text-xl font-bold">MediBook</h1>

      {/* Right side */}
      <div>
        <button className="bg-white text-blue-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>

    </header>
  );
};

export default Header;