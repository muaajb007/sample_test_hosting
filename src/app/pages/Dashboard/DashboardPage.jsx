import { Users, TrendingUp, QrCode, Gift } from "lucide-react";
import KPIBox from "../../components/KPIBox";
import ChartCard from "../../components/ChartCard";
import DataTable from "../../components/DataTable";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const activityData = [
  { month: "Jan", scans: 245, points: 12250 },
  { month: "Feb", scans: 312, points: 15600 },
  { month: "Mar", scans: 289, points: 14450 },
  { month: "Apr", scans: 401, points: 20050 },
  { month: "May", scans: 378, points: 18900 },
  { month: "Jun", scans: 445, points: 22250 },
];

const recentScans = [
  {
    painter: "Rajesh Kumar",
    qrCode: "QR-2024-1245",
    points: 50,
    time: "2 mins ago",
    status: "Completed",
  },
  {
    painter: "Amit Sharma",
    qrCode: "QR-2024-1246",
    points: 75,
    time: "15 mins ago",
    status: "Completed",
  },
  {
    painter: "Vikram Singh",
    qrCode: "QR-2024-1243",
    points: 50,
    time: "32 mins ago",
    status: "Completed",
  },
  {
    painter: "Suresh Yadav",
    qrCode: "QR-2024-1241",
    points: 100,
    time: "1 hour ago",
    status: "Completed",
  },
  {
    painter: "Manoj Verma",
    qrCode: "QR-2024-1239",
    points: 50,
    time: "2 hours ago",
    status: "Completed",
  },
];

const columns = [
  { key: "painter", label: "Painter Name" },
  { key: "qrCode", label: "QR Code" },
  {
    key: "points",
    label: "Points",
    render: (value) => (
      <span className="font-semibold text-green-600">+{value}</span>
    ),
  },
  { key: "time", label: "Time" },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        {value}
      </span>
    ),
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIBox
          title="Total Painters"
          value="1,284"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          iconColor="text-blue-600"
          iconBg="bg-blue-100"
        />
        <KPIBox
          title="Total Points Issued"
          value="485,320"
          change="+8.2% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-green-600"
          iconBg="bg-green-100"
        />
        <KPIBox
          title="QR Codes Scanned Today"
          value="156"
          change="+23 from yesterday"
          changeType="positive"
          icon={QrCode}
          iconColor="text-orange-600"
          iconBg="bg-orange-100"
        />
        <KPIBox
          title="Rewards Redeemed"
          value="342"
          change="18 pending approval"
          changeType="neutral"
          icon={Gift}
          iconColor="text-purple-600"
          iconBg="bg-purple-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Scan Activity"
          subtitle="QR code scans over the last 6 months"
        >
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="scans"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: "#2563eb", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Points Distribution"
          subtitle="Points issued over the last 6 months"
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="points" fill="#f97316" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Recent Scans" subtitle="Latest QR code scan activity">
        <DataTable columns={columns} data={recentScans} />
      </ChartCard>
    </div>
  );
}
