import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sale, Activity } from "@/lib/types/dashboard";

const recentSales: Sale[] = [
  {
    id: 1,
    customer: "John Doe",
    status: "Completed",
    date: "2024-03-20",
    amount: "$250.00",
  },
  {
    id: 2,
    customer: "Jane Smith",
    status: "Processing",
    date: "2024-03-19",
    amount: "$150.00",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    status: "Completed",
    date: "2024-03-18",
    amount: "$350.00",
  },
];

const activities: Activity[] = [
  {
    action: "New user registered",
    time: "2 minutes ago",
  },
  {
    action: "Sales report generated",
    time: "1 hour ago",
  },
  {
    action: "New order received",
    time: "3 hours ago",
  },
  {
    action: "System update completed",
    time: "5 hours ago",
  },
];

export function AnalyticsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <div className="p-6">
          <h3 className="text-xl font-bold">Recent Sales</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell>{sale.status}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                  <TableCell className="text-right">{sale.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
      <Card className="col-span-3">
        <div className="p-6">
          <h3 className="text-xl font-bold">Recent Activity</h3>
          <div className="mt-4 space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
