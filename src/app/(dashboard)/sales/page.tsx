import { DateRangePicker } from "@/components/sales/DateRangePicker"
import { SalesChart } from "@/components/sales/SalesChart"
import { SalesFilters } from "@/components/sales/SalesFilters"
import { SalesMetrics } from "@/components/sales/SalesMetrics"
import { SalesTable } from "@/components/sales/SalesTable"
import { Card } from "@/components/ui/card"

export default function SalesDashboard() {
    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Sales Dashboard</h1>
                <DateRangePicker />
            </div>

            <SalesMetrics />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card className="p-6">
                    <h2 className="mb-4 text-xl font-semibold">Revenue Overview</h2>
                    <SalesChart />
                </Card>

                <Card className="p-6">
                    <h2 className="mb-4 text-xl font-semibold">Top Products</h2>
                    <SalesTable />
                </Card>
            </div>

            <Card className="p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Sales Details</h2>
                    <SalesFilters />
                </div>
                <SalesTable />
            </Card>
        </div>
    )
} 