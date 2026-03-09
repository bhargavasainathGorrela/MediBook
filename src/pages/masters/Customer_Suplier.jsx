import React from 'react'

function Customer_Suplier() {



  const [code, setCode] = useState("");
  const [type, setType] = useState("Customer");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);

  const [list, setList] = useState([]);

  // NEW
  const handleNew = () => {
    setCode("");
    setType("Customer");
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setIsEditMode(false);
  };

  // SAVE
  const handleSave = () => {

    if (!code || !name) {
      alert("Code and Name are required");
      return;
    }

    if (isEditMode) {
      const updated = list.map((item) =>
        item.code === code
          ? { code, type, name, phone, email, address }
          : item
      );

      setList(updated);
      alert("Record updated");
    } else {
      const newItem = { code, type, name, phone, email, address };
      setList([...list, newItem]);
      alert("Record saved");
    }

  };

  // EDIT
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // SEARCH
  const handleSearch = () => {

    const found = list.find((item) => item.code === code);

    if (found) {
      setType(found.type);
      setName(found.name);
      setPhone(found.phone);
      setEmail(found.email);
      setAddress(found.address);

      alert("Record found");
    } else {
      alert("Record not found");
    }

  };

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        Customer / Supplier Entry
      </h2>

      <div className="bg-white shadow p-6 rounded  space-y-4">

        {/* Code */}
        <div>
          <label className="block text-sm mb-1">Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm mb-1">Type</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option>Customer</option>
            <option>Supplier</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm mb-1">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">

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

}

export default Customer_Suplier
