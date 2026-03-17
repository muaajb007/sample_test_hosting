import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, Package } from "lucide-react";
import DataTable from "../../components/DataTable";
import ModalForm from "../../components/ModalForm";

const rewards = [
  {
    id: 1,
    name: "Paint Roller Set",
    pointsRequired: 500,
    stock: 45,
    category: "Tools",
    status: "Available",
    redeemed: 28,
  },
  {
    id: 2,
    name: "Premium Paint Brush Kit",
    pointsRequired: 750,
    stock: 32,
    category: "Tools",
    status: "Available",
    redeemed: 41,
  },
  {
    id: 3,
    name: "Safety Helmet",
    pointsRequired: 1000,
    stock: 12,
    category: "Safety Gear",
    status: "Low Stock",
    redeemed: 15,
  },
  {
    id: 4,
    name: "Paint Sprayer",
    pointsRequired: 2500,
    stock: 0,
    category: "Equipment",
    status: "Out of Stock",
    redeemed: 8,
  },
  {
    id: 5,
    name: "Work Gloves (Pack of 5)",
    pointsRequired: 300,
    stock: 78,
    category: "Safety Gear",
    status: "Available",
    redeemed: 62,
  },
  {
    id: 6,
    name: "Measuring Tape Set",
    pointsRequired: 400,
    stock: 54,
    category: "Tools",
    status: "Available",
    redeemed: 34,
  },
];

const columns = [
  {
    key: "name",
    label: "Reward Name",
    render: (value) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
          <Package className="w-5 h-5 text-orange-600" />
        </div>
        <span className="font-medium">{value}</span>
      </div>
    ),
  },
  {
    key: "pointsRequired",
    label: "Points Required",
    render: (value) => (
      <span className="font-semibold text-blue-600">{value.toLocaleString()}</span>
    ),
  },
  { key: "category", label: "Category" },
  {
    key: "stock",
    label: "Stock",
    render: (value) => (
      <span
        className={`font-medium ${
          value === 0
            ? "text-red-600"
            : value < 20
            ? "text-orange-600"
            : "text-green-600"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === "Available"
            ? "bg-green-100 text-green-800"
            : value === "Low Stock"
            ? "bg-orange-100 text-orange-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {value}
      </span>
    ),
  },
  {
    key: "redeemed",
    label: "Times Redeemed",
    render: (value) => <span>{value}x</span>,
  },
  {
    key: "actions",
    label: "Actions",
    render: () => (
      <div className="flex gap-2">
        <button className="p-1 hover:bg-blue-50 rounded transition-colors">
          <Edit className="w-4 h-4 text-blue-600" />
        </button>
        <button className="p-1 hover:bg-red-50 rounded transition-colors">
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      </div>
    ),
  },
];

export default function RewardsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Rewards Catalog
          </h1>
          <p className="text-gray-600">Manage your reward gifts and inventory</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Reward
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Rewards</p>
          <p className="text-3xl font-bold text-gray-900">24</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Available</p>
          <p className="text-3xl font-bold text-green-600">18</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Low Stock</p>
          <p className="text-3xl font-bold text-orange-600">3</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Out of Stock</p>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search rewards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            Filters
          </button>
        </div>
      </div>

      <DataTable columns={columns} data={rewards} />

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Reward"
        footer={
          <>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Reward
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reward Name
            </label>
            <input
              type="text"
              placeholder="e.g., Paint Roller Set"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select category</option>
              <option>Tools</option>
              <option>Equipment</option>
              <option>Safety Gear</option>
              <option>Accessories</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Points Required
            </label>
            <input
              type="number"
              placeholder="500"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Stock
            </label>
            <input
              type="number"
              placeholder="50"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe the reward item..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
          </div>
        </div>
      </ModalForm>
    </div>
  );
}
