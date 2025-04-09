'use client';

import { ChartBarIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Overview', href: '/dashboard', icon: HomeIcon },
    { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
    { name: 'Reports', href: '/dashboard/reports', icon: DocumentTextIcon },
];

export default function DashboardNav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${isActive ? 'bg-gray-100 text-gray-900' : ''
                            }`}
                    >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
} 