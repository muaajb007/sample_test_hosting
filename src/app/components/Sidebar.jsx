import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  QrCode,
  TrendingUp,
  Gift,
  ClipboardCheck,
  Store,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Painters", href: "/admin/painters", icon: Users },
  { name: "QR Codes", href: "/admin/qrcodes", icon: QrCode },
  { name: "Transactions", href: "/admin/transactions", icon: TrendingUp },
  { name: "Rewards", href: "/admin/rewards", icon: Gift },
  { name: "Claims", href: "/admin/claims", icon: ClipboardCheck },
  { name: "Shop Profile", href: "/admin/profile", icon: Store },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">P</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">Painter</h1>
            <p className="text-xs text-gray-500">Rewards System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive =
            item.href === "/admin"
              ? location.pathname === "/admin"
              : location.pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-orange-900 mb-1">
            Need Help?
          </p>
          <p className="text-xs text-orange-700 mb-3">
            Contact support for assistance
          </p>
          <button className="text-xs bg-orange-600 text-white px-3 py-1.5 rounded-md hover:bg-orange-700 transition-colors">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}
