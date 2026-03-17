import { useState } from "react";
import { Lock, Bell, Shield, Save } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    emailNewPainter: true,
    emailNewScan: false,
    emailNewClaim: true,
    emailLowStock: true,
    pushNewClaim: true,
    pushLowStock: false,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Settings</h1>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Settings Menu</h3>
          </div>
          <nav className="p-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg bg-blue-50 text-blue-700">
              <Lock className="w-5 h-5" />
              <span className="font-medium">Change Password</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg text-gray-700 hover:bg-gray-50 mt-1">
              <Bell className="w-5 h-5" />
              <span className="font-medium">Notifications</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg text-gray-700 hover:bg-gray-50 mt-1">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Security</span>
            </button>
          </nav>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Change Password
                </h3>
                <p className="text-sm text-gray-600">
                  Update your password regularly for security
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-5 h-5" />
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Notification Settings
                </h3>
                <p className="text-sm text-gray-600">
                  Choose what notifications you want to receive
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  Email Notifications
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">
                        New Painter Registration
                      </p>
                      <p className="text-sm text-gray-600">
                        Get notified when a new painter registers
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.emailNewPainter}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          emailNewPainter: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">
                        QR Code Scanned
                      </p>
                      <p className="text-sm text-gray-600">
                        Get notified for every QR code scan
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.emailNewScan}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          emailNewScan: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">
                        New Reward Claim
                      </p>
                      <p className="text-sm text-gray-600">
                        Get notified when a painter claims a reward
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.emailNewClaim}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          emailNewClaim: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">Low Stock Alert</p>
                      <p className="text-sm text-gray-600">
                        Get notified when reward stock is low
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.emailLowStock}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          emailLowStock: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">
                  Push Notifications
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">
                        New Reward Claims
                      </p>
                      <p className="text-sm text-gray-600">
                        Instant alerts for new claims
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.pushNewClaim}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          pushNewClaim: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-900">
                        Low Stock Alerts
                      </p>
                      <p className="text-sm text-gray-600">
                        Instant alerts for low stock items
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.pushLowStock}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          pushLowStock: e.target.checked,
                        })
                      }
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-5 h-5" />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
