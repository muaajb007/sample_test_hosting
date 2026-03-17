import { Store, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

export default function ShopProfile() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Shop Profile
          </h1>
          <p className="text-gray-600">View and manage your shop information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Edit className="w-5 h-5" />
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Elite Paint Shop
              </h2>
              <p className="text-sm text-gray-600 mb-4">Premium Paint Dealer</p>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Active
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-gray-500">Member Since</p>
                  <p className="font-medium text-gray-900">January 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Store className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-gray-500">Shop ID</p>
                  <p className="font-medium text-gray-900">SHOP-2023-0145</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Painters</p>
                <p className="text-2xl font-bold text-gray-900">1,284</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Points Issued</p>
                <p className="text-2xl font-bold text-gray-900">485,320</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Rewards Given</p>
                <p className="text-2xl font-bold text-gray-900">342</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Shop Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Shop Name
                </label>
                <input
                  type="text"
                  value="Elite Paint Shop"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <input
                  type="text"
                  value="Paint Dealer"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  value="22AAAAA0000A1Z5"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  value="REG-2023-0145"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Email Address</p>
                  <p className="font-medium text-gray-900">
                    admin@elitepaintshop.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                  <p className="font-medium text-gray-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Shop Address</p>
                  <p className="font-medium text-gray-900">
                    123, MG Road, Commercial Area
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Owner Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Owner Name
                </label>
                <input
                  type="text"
                  value="Ramesh Patel"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Owner Email
                </label>
                <input
                  type="text"
                  value="ramesh@elitepaintshop.com"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Owner Phone
                </label>
                <input
                  type="text"
                  value="+91 98765 43211"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value="Shop Admin"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
