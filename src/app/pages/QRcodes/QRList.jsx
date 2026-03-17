import { useState } from "react";
import { Upload, Search, Filter, Download } from "lucide-react";
import DataTable from "../../components/DataTable";
import ModalForm from "../../components/ModalForm";

const qrCodes = [
  {
    id: 1,
    code: "QR-2024-1245",
    bucketId: "BUCKET-A-2024",
    pointsValue: 50,
    status: "Active",
    scanned: 12,
    createdDate: "Mar 1, 2024",
  },
  {
    id: 2,
    code: "QR-2024-1246",
    bucketId: "BUCKET-A-2024",
    pointsValue: 75,
    status: "Active",
    scanned: 8,
    createdDate: "Mar 1, 2024",
  },
  {
    id: 3,
    code: "QR-2024-1247",
    bucketId: "BUCKET-B-2024",
    pointsValue: 100,
    status: "Active",
    scanned: 15,
    createdDate: "Mar 2, 2024",
  },
  {
    id: 4,
    code: "QR-2024-1243",
    bucketId: "BUCKET-A-2024",
    pointsValue: 50,
    status: "Used",
    scanned: 1,
    createdDate: "Feb 28, 2024",
  },
  {
    id: 5,
    code: "QR-2024-1241",
    bucketId: "BUCKET-C-2024",
    pointsValue: 100,
    status: "Active",
    scanned: 5,
    createdDate: "Feb 25, 2024",
  },
];

const columns = [
  { key: "code", label: "QR Code" },
  { key: "bucketId", label: "Bucket ID" },
  {
    key: "pointsValue",
    label: "Points Value",
    render: (value) => (
      <span className="font-semibold text-green-600">{value} pts</span>
    ),
  },
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
    key: "scanned",
    label: "Times Scanned",
    render: (value) => <span>{value}x</span>,
  },
  { key: "createdDate", label: "Created Date" },
];

export default function QRList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">QR Codes</h1>
          <p className="text-gray-600">Manage and upload QR codes</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 text-gray-600" />
            Export
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Upload className="w-5 h-5" />
            Upload QR Codes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total QR Codes</p>
          <p className="text-3xl font-bold text-gray-900">2,458</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Active Codes</p>
          <p className="text-3xl font-bold text-green-600">1,832</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Used Codes</p>
          <p className="text-3xl font-bold text-gray-600">626</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Scans</p>
          <p className="text-3xl font-bold text-orange-600">4,521</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search QR codes or bucket ID..."
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

      <DataTable columns={columns} data={qrCodes} />

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Upload QR Codes"
        footer={
          <>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Upload
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bucket ID
            </label>
            <input
              type="text"
              placeholder="e.g., BUCKET-A-2024"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Points Value
            </label>
            <input
              type="number"
              placeholder="50"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload CSV File
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">CSV file with QR codes</p>
            </div>
          </div>
        </div>
      </ModalForm>
    </div>
  );
}
