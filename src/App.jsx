import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Purchase from "./pages/Inventory/Purchase";
import Payements from "./pages/Inventory/Payments";
import Receipts from "./pages/Inventory/Receipts";
import CustSup from "./pages/masters/Customer_Suplier";
import salereport from "./pages/Reports/salereport";
import purchasereport from "./pages/Reports/purchasereport";
import Products from "./pages/masters/Products";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sale from "./pages/Inventory/Sale";
import Settings from "./pages/Settings/settings"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <div className="flex">

        <Sidebar />

       <main className="flex-1 p-6 bg-gray-100">

          <Routes>
            <Route path="pages/Inventory/Sale" element={<Sale/>} />
            <Route path="pages/Inventory/Purchase" element={<Purchase />} />
            <Route path="pages/Inventory/Receipts" element={<Receipts/>} />
            <Route path="pages/Inventory/Payments" element={<Payements />} />
             <Route path="pages/masters/Customer_Suplier" element={<CustSup/>}/>
             <Route path="pages/masters/Products"  element={<Products/>}/>
             <Route path="pages/Reports/purchasereport" element={<Purchase/>}/>
             <Route path="pages/Reports/salereport" element={<Sale/>}/>
            <Route path="pages/dashboard/Dashboard" element={<Dashboard/>} />
             <Route path="pages/Settings/settings" element={<Settings/>} />
          </Routes>
       </main>

      </div>

    </BrowserRouter>
  );
}

export default App;