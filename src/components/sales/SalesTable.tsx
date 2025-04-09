import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const salesData = [
    {
        id: "1",
        product: "Premium Widget",
        category: "Electronics",
        price: 299.99,
        sales: 145,
        revenue: 43498.55,
    },
    {
        id: "2",
        product: "Basic Widget",
        category: "Electronics",
        price: 149.99,
        sales: 289,
        revenue: 43347.11,
    },
    {
        id: "3",
        product: "Super Widget",
        category: "Electronics",
        price: 399.99,
        sales: 98,
        revenue: 39199.02,
    },
    {
        id: "4",
        product: "Mega Widget",
        category: "Electronics",
        price: 499.99,
        sales: 65,
        revenue: 32499.35,
    },
]

export function SalesTable() {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Sales</TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {salesData.map((sale) => (
                        <TableRow key={sale.id}>
                            <TableCell className="font-medium">{sale.product}</TableCell>
                            <TableCell>{sale.category}</TableCell>
                            <TableCell className="text-right">${sale.price.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{sale.sales}</TableCell>
                            <TableCell className="text-right">${sale.revenue.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
} 