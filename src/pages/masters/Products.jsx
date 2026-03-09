import { useState } from "react";

const Products = () => {

  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemName] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  // Temporary product list (simulate database)
  const [products, setProducts] = useState([
    { code: "101", name: "Paracetamol" },
    { code: "102", name: "Vitamin C" }
  ]);

  // NEW
  const handleNew = () => {
    setItemCode("");
    setItemName("");
    setIsEditMode(false);
  };

  // SAVE
  const handleSave = () => {

    if (!itemCode || !itemName) {
      alert("Enter item code and name");
      return;
    }

    if (isEditMode) {
      const updatedProducts = products.map((p) =>
        p.code === itemCode ? { ...p, name: itemName } : p
      );

      setProducts(updatedProducts);
      alert("Product updated");
    } else {
      const newProduct = { code: itemCode, name: itemName };
      setProducts([...products, newProduct]);
      alert("Product saved");
    }

  };

  // EDIT
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // SEARCH
  const handleSearch = () => {

    const found = products.find((p) => p.code === itemCode);

    if (found) {
      setItemName(found.name);
      alert("Item found");
    } else {
      alert("Item not found");
      setItemName("");
    }

  };

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">Product Entry</h2>

      <div className="bg-white shadow p-6 rounded w-96">

        {/* Item Code */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Item Code
          </label>

          <input
            type="text"
            value={itemCode}
            onChange={(e) => setItemCode(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter Item Code"
          />
        </div>

        {/* Item Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Item Name
          </label>

          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter Item Name"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4 flex-wrap">

          <button
            onClick={handleNew}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            New
          </button>

          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>

          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>

          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Search
          </button>

        </div>

      </div>

    </div>
  );
};

export default Products;