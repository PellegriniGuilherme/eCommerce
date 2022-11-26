import React, { useEffect, useRef, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { usePage } from '@inertiajs/inertia-react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function Dashboard({ sellerChart, productChart }) {

    const { auth } = usePage().props;
    const [chartWidth, setChartWidth] = useState(500);
    const chartViewRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth > 800){
                setChartWidth((chartViewRef.current.offsetWidth / 2) - 15);
            }else{
                setChartWidth((chartViewRef.current.offsetWidth) - 15);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [chartViewRef.current]);

    return (
        <AdminLayout title="Dashboard">
            <h1 className="font-bold text-zinc-600 text-xl">
                Olá {auth.user.name.split(" ")[0]}
            </h1>
            <p>Bem vindo ao seu painel de controle.</p>
            <div className="my-8 flex flex-row flex-wrap gap-5 items-center" ref={chartViewRef}>
                <LineChart
                    width={chartWidth}
                    height={300}
                    data={sellerChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="vendas"
                        stroke="#f97316"
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
                <BarChart
                    width={chartWidth}
                    height={300}
                    data={productChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vendas" fill="#f97316" />
                </BarChart>
            </div>
        </AdminLayout>
    )
}

export default Dashboard
