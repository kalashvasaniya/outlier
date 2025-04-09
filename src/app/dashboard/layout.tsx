import DashboardNav from '@/components/DashboardNav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sales Dashboard',
    description: 'Track your sales performance and revenue insights',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
            <div className="flex h-screen">
                <aside className="w-64 bg-white border-r border-gray-200 p-4">
                    <div className="mb-8">
                        <h1 className="text-xl font-bold text-gray-900">Sales Dashboard</h1>
                    </div>
                    <DashboardNav />
                </aside>
                <main className="flex-1 overflow-auto">
                    <div className="p-4 md:p-10">{children}</div>
                </main>
            </div>
        </div>
    );
} 