import { useState } from "react";
import { Search, Filter, Download, TrendingUp, TrendingDown } from "lucide-react";
import DataTable from "../../components/DataTable";

const transactions = [
  {
    id: 1,
    painter: "Rajesh Kumar",
    qrCode: "QR-2024-1245",
    points: 50,
    type: "Earned",
    dateTime: "Mar 7, 2024 10:23 AM",
    balance: 2450,
  },
  {
    id: 2,
    painter: "Amit Sharma",
    qrCode: "REWARD-CLAIM-342",
    points: -500,
    type: "Redeemed",
    dateTime: "Mar 7, 2024 09:45 AM",
    balance: 3210,
  },
  {
    id: 3,
    painter: "Vikram Singh",
    qrCode: "QR-2024-1243",
    points: 50,
    type: "Earned",
    dateTime: "Mar 7, 2024 09:15 AM",
    balance: 1890,
  },
  {
    id: 4,
    painter: "Suresh Yadav",
    qrCode: "QR-2024-1241",
    points: 100,
    type: "Earned",
    dateTime: "Mar 7, 2024 08:32 AM",
    balance: 4125,
  },
  {
    id: 5,
    painter: "Manoj Verma",
    qrCode: "QR-2024-1239",
    points: 50,
    type: "Earned",
    dateTime: "Mar 7, 2024 07:58 AM",
    balance: 980,
  },
  {
    id: 6,
    painter: "Rajesh Kumar",
    qrCode: "REWARD-CLAIM-341",
    points: -750,
    type: "Redeemed",
    dateTime: "Mar 6, 2024 04:12 PM",
    balance: 2400,
  },
  {
    id: 7,
    painter: "Amit Sharma",
    qrCode: "QR-2024-1238",
    points: 75,
    type: "Earned",
    dateTime: "Mar 6, 2024 03:45 PM",
    balance: 3710,
  },
  {
    id: 8,
    painter: "Vikram Singh",
    qrCode: "QR-2024-1237",
    points: 50,
    type: "Earned",
    dateTime: "Mar 6, 2024 02:21 PM",
    balance: 1840,
  },
];

const columns = [
  { key: "painter", label: "Painter Name" },
  { key: "qrCode", label: "QR Code / Reference" },
  {
    key: "points",
    label: "Points",
    render: (value) => (
      <span
        className={`font-semibold ${
          value > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {value > 0 ? "+" : ""}
        {value}
      </span>
    ),
  },
  {
    key: "type",
    label: "Type",
    render: (value) => (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === "Earned"
            ? "bg-green-100 text-green-800"
            : "bg-orange-100 text-orange-800"
        }`}
      >
        {value === "Earned" ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        {value}
      </span>
    ),
  },
  { key: "dateTime", label: "Date & Time" },
  {
    key: "balance",
    label: "Current Balance",
    render: (value) => (
      <span className="font-medium text-blue-600">{value.toLocaleString()}</span>
    ),
  },
];

export default function PointsTransactions() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Points Transactions
          </h1>
          <p className="text-gray-600">
            Complete history of all points earned and redeemed
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-5 h-5 text-gray-600" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Points Issued</p>
          <p className="text-3xl font-bold text-green-600">485,320</p>
          <p className="text-xs text-gray-500 mt-2">Lifetime</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Points Redeemed</p>
          <p className="text-3xl font-bold text-orange-600">128,450</p>
          <p className="text-xs text-gray-500 mt-2">Lifetime</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Outstanding Points</p>
          <p className="text-3xl font-bold text-blue-600">356,870</p>
          <p className="text-xs text-gray-500 mt-2">Current balance</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by painter name, QR code, or transaction..."
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

      <DataTable columns={columns} data={transactions} />
    </div>
  );
}
