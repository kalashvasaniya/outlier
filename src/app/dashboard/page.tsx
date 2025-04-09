'use client';

import DashboardFilters from '@/components/DashboardFilters';
import { AreaChart, BarChart, Card, Col, DonutChart, Grid, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';

// Mock data for the dashboard
const salesData = [
    {
        date: '2024-01',
        Sales: 2890,
        Revenue: 2400,
    },
    {
        date: '2024-02',
        Sales: 1890,
        Revenue: 1398,
    },
    {
        date: '2024-03',
        Sales: 3890,
        Revenue: 2980,
    },
    {
        date: '2024-04',
        Sales: 4890,
        Revenue: 3908,
    },
];

const categoryData = [
    {
        name: 'Electronics',
        value: 35,
    },
    {
        name: 'Clothing',
        value: 25,
    },
    {
        name: 'Books',
        value: 20,
    },
    {
        name: 'Home & Garden',
        value: 15,
    },
    {
        name: 'Sports',
        value: 5,
    },
];

const stats = [
    {
        title: 'Total Revenue',
        metric: '$ 34,743',
        change: '+12.3%',
    },
    {
        title: 'Total Sales',
        metric: '1,234',
        change: '+8.2%',
    },
    {
        title: 'Average Order Value',
        metric: '$ 89.50',
        change: '+4.5%',
    },
    {
        title: 'Conversion Rate',
        metric: '3.2%',
        change: '+1.2%',
    },
];

export default function DashboardPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <Title>Sales Dashboard</Title>
                    <Text>Track your sales performance and revenue insights</Text>
                </div>
                <DashboardFilters />
            </div>

            <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-6 mb-6">
                {stats.map((item) => (
                    <Col key={item.title}>
                        <Card>
                            <Text>{item.title}</Text>
                            <Metric>{item.metric}</Metric>
                            <Text className="text-green-500">{item.change}</Text>
                        </Card>
                    </Col>
                ))}
            </Grid>

            <TabGroup className="mt-6">
                <TabList className="mt-2">
                    <Tab>Overview</Tab>
                    <Tab>Analytics</Tab>
                    <Tab>Reports</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className="mt-6">
                            <Card>
                                <Title>Sales Overview</Title>
                                <AreaChart
                                    className="mt-4 h-72"
                                    data={salesData}
                                    index="date"
                                    categories={['Sales', 'Revenue']}
                                    colors={['blue', 'green']}
                                    valueFormatter={(number: number) =>
                                        `$${Intl.NumberFormat('us').format(number).toString()}`
                                    }
                                />
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <Card>
                                <Title>Sales by Category</Title>
                                <DonutChart
                                    className="mt-4 h-72"
                                    data={categoryData}
                                    category="value"
                                    index="name"
                                    colors={['slate', 'violet', 'indigo', 'rose', 'cyan']}
                                />
                            </Card>
                            <Card>
                                <Title>Monthly Revenue</Title>
                                <BarChart
                                    className="mt-4 h-72"
                                    data={salesData}
                                    index="date"
                                    categories={['Revenue']}
                                    colors={['blue']}
                                    valueFormatter={(number: number) =>
                                        `$${Intl.NumberFormat('us').format(number).toString()}`
                                    }
                                />
                            </Card>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-6">
                            <Card>
                                <Title>Detailed Reports</Title>
                                <div className="mt-4">
                                    <Text>Coming soon...</Text>
                                </div>
                            </Card>
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
} 