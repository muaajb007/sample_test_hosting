import { useState } from "react";
import { Search, Filter, Check, X, Clock } from "lucide-react";
import DataTable from "../../components/DataTable";

const claims = [
  {
    id: 1,
    claimId: "CLM-2024-0342",
    painter: "Rajesh Kumar",
    reward: "Paint Roller Set",
    points: 500,
    status: "Pending",
    requestDate: "Mar 7, 2024 10:15 AM",
  },
  {
    id: 2,
    claimId: "CLM-2024-0341",
    painter: "Amit Sharma",
    reward: "Premium Paint Brush Kit",
    points: 750,
    status: "Pending",
    requestDate: "Mar 7, 2024 09:32 AM",
  },
  {
    id: 3,
    claimId: "CLM-2024-0340",
    painter: "Vikram Singh",
    reward: "Work Gloves (Pack of 5)",
    points: 300,
    status: "Approved",
    requestDate: "Mar 6, 2024 04:45 PM",
    approvedDate: "Mar 6, 2024 05:12 PM",
  },
  {
    id: 4,
    claimId: "CLM-2024-0339",
    painter: "Suresh Yadav",
    reward: "Safety Helmet",
    points: 1000,
    status: "Approved",
    requestDate: "Mar 6, 2024 02:20 PM",
    approvedDate: "Mar 6, 2024 03:05 PM",
  },
  {
    id: 5,
    claimId: "CLM-2024-0338",
    painter: "Manoj Verma",
    reward: "Paint Sprayer",
    points: 2500,
    status: "Rejected",
    requestDate: "Mar 6, 2024 11:30 AM",
    rejectedDate: "Mar 6, 2024 12:15 PM",
    reason: "Insufficient stock",
  },
];

const columns = [
  { key: "claimId", label: "Claim ID" },
  { key: "painter", label: "Painter Name" },
  { key: "reward", label: "Reward Item" },
  {
    key: "points",
    label: "Points",
    render: (value) => (
      <span className="font-semibold text-blue-600">{value}</span>
    ),
  },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === "Pending"
            ? "bg-yellow-100 text-yellow-800"
            : value === "Approved"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {value === "Pending" && <Clock className="w-3 h-3" />}
        {value === "Approved" && <Check className="w-3 h-3" />}
        {value === "Rejected" && <X className="w-3 h-3" />}
        {value}
      </span>
    ),
  },
  { key: "requestDate", label: "Request Date" },
  {
    key: "actions",
    label: "Actions",
    render: (_, row) =>
      row.status === "Pending" ? (
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
            Approve
          </button>
          <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
            Reject
          </button>
        </div>
      ) : (
        <span className="text-sm text-gray-500">No action</span>
      ),
  },
];

export default function RewardClaims() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Claims", count: 125 },
    { id: "pending", label: "Pending", count: 18 },
    { id: "approved", label: "Approved", count: 94 },
    { id: "rejected", label: "Rejected", count: 13 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Reward Claims
          </h1>
          <p className="text-gray-600">
            Review and manage reward redemption requests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Pending Claims</p>
          <p className="text-3xl font-bold text-yellow-600">18</p>
          <p className="text-xs text-gray-500 mt-2">Awaiting approval</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Approved Today</p>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-xs text-gray-500 mt-2">Last 24 hours</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Claims</p>
          <p className="text-3xl font-bold text-gray-900">342</p>
          <p className="text-xs text-gray-500 mt-2">Lifetime</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search claims by painter name, claim ID, or reward..."
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

        <div className="border-b border-gray-200 px-4">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
                <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-gray-100">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <DataTable columns={columns} data={claims} />
      </div>
    </div>
  );
}
