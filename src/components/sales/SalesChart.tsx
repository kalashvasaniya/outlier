import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"

const data = [
    { date: "Jan", revenue: 4000, orders: 240 },
    { date: "Feb", revenue: 3000, orders: 139 },
    { date: "Mar", revenue: 2000, orders: 980 },
    { date: "Apr", revenue: 2780, orders: 390 },
    { date: "May", revenue: 1890, orders: 480 },
    { date: "Jun", revenue: 2390, orders: 380 },
    { date: "Jul", revenue: 3490, orders: 430 },
]

export function SalesChart() {
    return (
        <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Area
                        type="monotone"
                        dataKey="orders"
                        stackId="2"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
} 