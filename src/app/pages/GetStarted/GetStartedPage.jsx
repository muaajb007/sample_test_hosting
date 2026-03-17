import { useNavigate } from "react-router";
import { Paintbrush, Award, QrCode, TrendingUp } from "lucide-react";

export default function GetStartedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
            <Paintbrush className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Painter Rewards System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your painters, track QR code scans, distribute points, and
            reward your loyal painters — all in one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              QR Code Tracking
            </h3>
            <p className="text-sm text-gray-600">
              Upload and manage QR codes to track painter activity and
              distribute points instantly.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Points Management
            </h3>
            <p className="text-sm text-gray-600">
              Monitor points transactions, track balances, and maintain
              complete visibility of your rewards program.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Rewards Catalog
            </h3>
            <p className="text-sm text-gray-600">
              Create and manage your gift catalog, approve claims, and delight
              your painters.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Admin accounts are created by Super Admin
          </p>
        </div>
      </div>
    </div>
  );
}
