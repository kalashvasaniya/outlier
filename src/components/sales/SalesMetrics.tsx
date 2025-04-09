import { Card } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"

const metrics = [
    {
        title: "Total Revenue",
        value: "$124,563.00",
        change: "+12.5%",
        trend: "up",
    },
    {
        title: "Active Customers",
        value: "2,345",
        change: "+8.2%",
        trend: "up",
    },
    {
        title: "Average Order Value",
        value: "$53.12",
        change: "-2.4%",
        trend: "down",
    },
    {
        title: "Conversion Rate",
        value: "3.2%",
        change: "+1.8%",
        trend: "up",
    },
]

export function SalesMetrics() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
                <Card key={metric.title} className="p-6">
                    <div className="flex flex-col">
                        <p className="text-sm text-muted-foreground">{metric.title}</p>
                        <div className="mt-2 flex items-baseline">
                            <p className="text-2xl font-semibold">{metric.value}</p>
                            <span
                                className={`ml-2 flex items-baseline text-sm font-semibold ${metric.trend === "up" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {metric.trend === "up" ? (
                                    <ArrowUpIcon className="h-4 w-4" />
                                ) : (
                                    <ArrowDownIcon className="h-4 w-4" />
                                )}
                                {metric.change}
                            </span>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
} 