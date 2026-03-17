import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2 } from "lucide-react";
import DataTable from "../../components/DataTable";
import ModalForm from "../../components/ModalForm";

const painters = [
  {
    id: 1,
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh@example.com",
    points: 2450,
    totalScans: 49,
    joinedDate: "Jan 15, 2024",
    status: "Active",
  },
  {
    id: 2,
    name: "Amit Sharma",
    phone: "+91 98765 43211",
    email: "amit@example.com",
    points: 3210,
    totalScans: 64,
    joinedDate: "Dec 8, 2023",
    status: "Active",
  },
  {
    id: 3,
    name: "Vikram Singh",
    phone: "+91 98765 43212",
    email: "vikram@example.com",
    points: 1890,
    totalScans: 38,
    joinedDate: "Feb 22, 2024",
    status: "Active",
  },
  {
    id: 4,
    name: "Suresh Yadav",
    phone: "+91 98765 43213",
    email: "suresh@example.com",
    points: 4125,
    totalScans: 83,
    joinedDate: "Nov 3, 2023",
    status: "Active",
  },
  {
    id: 5,
    name: "Manoj Verma",
    phone: "+91 98765 43214",
    email: "manoj@example.com",
    points: 980,
    totalScans: 20,
    joinedDate: "Mar 10, 2024",
    status: "Inactive",
  },
];

const columns = [
  { key: "name", label: "Painter Name" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  {
    key: "points",
    label: "Points Balance",
    render: (value) => (
      <span className="font-semibold text-blue-600">{value.toLocaleString()}</span>
    ),
  },
  { key: "totalScans", label: "Total Scans" },
  { key: "joinedDate", label: "Joined Date" },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {value}
      </span>
    ),
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

export default function PainterList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Painters</h1>
          <p className="text-gray-600">Manage your registered painters</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Painter
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search painters by name, phone, or email..."
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

      <DataTable columns={columns} data={painters} />

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Painter"
        footer={
          <>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Painter
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter painter's full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="painter@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Initial Points (Optional)
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </ModalForm>
    </div>
  );
}
