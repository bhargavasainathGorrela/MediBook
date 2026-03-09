import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">

      <ul className="space-y-4">

        {/* Dashboard */}
        <li className="group">
          <p className="font-semibold p-2 rounded hover:bg-gray-700 cursor-pointer">
            Dashboard
          </p>

          <ul className="ml-4 mt-1 hidden group-hover:block text-sm">
            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/dashboard/Dashboard">Dashboard</Link>
            </li>
          </ul>
        </li>

        {/* Inventory */}
        <li className="group">
          <p className="font-semibold p-2 rounded hover:bg-gray-700 cursor-pointer">
            Inventory
          </p>

          <ul className="ml-4 mt-1 hidden group-hover:block text-sm space-y-1">
            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Inventory/Sale">Sale</Link>
            </li>

            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Inventory/Purchase">Purchase</Link>
            </li>

            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Inventory/Payments">Payments</Link>
            </li>

            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Inventory/Receipts">Receipts</Link>
            </li>
          </ul>
        </li>

        {/* Masters */}
        <li className="group">
          <p className="font-semibold p-2 rounded hover:bg-gray-700 cursor-pointer">
            Masters
          </p>

          <ul className="ml-4 mt-1 hidden group-hover:block text-sm space-y-1">
            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/masters/Customer_Suplier">
                Customer / Supplier
              </Link>
            </li>

            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/masters/Products">Products</Link>
            </li>
          </ul>
        </li>

        {/* Reports */}
        <li className="group">
          <p className="font-semibold p-2 rounded hover:bg-gray-700 cursor-pointer">
            Reports
          </p>

          <ul className="ml-4 mt-1 hidden group-hover:block text-sm space-y-1">
            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Reports/purchasereport">Purchase</Link>
            </li>

            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Reports/salereport">Sale</Link>
            </li>
          </ul>
        </li>

        {/* Settings */}
        <li className="group">
          <p className="font-semibold p-2 rounded hover:bg-gray-700 cursor-pointer">
            Settings
          </p>

          <ul className="ml-4 mt-1 hidden group-hover:block text-sm">
            <li className="p-2 rounded hover:bg-gray-700">
              <Link to="/pages/Settings/settings">Settings</Link>
            </li>
          </ul>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;