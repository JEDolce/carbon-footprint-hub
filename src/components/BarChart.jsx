import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Gas',
        componente: 4000,
        amt: 2400,
    },
    {
        name: 'Electricidad',
        componente: 3000,
        amt: 2210,
    },
    {
        name: 'Nafta',
        componente: 2000,
        amt: 2290,
    },
    {
        name: 'Gasoil',
        componente: 2780,
        amt: 2000,
    },
    {
        name: 'R22',
        componente: 1890,
        amt: 2181,
    },
    {
        name: 'Home Office',
        componente: 2390,
        amt: 2500,
    },
    {
        name: 'Fletes',
        componente: 3490,
        amt: 2100,
    },
    {
        name: 'Vehiculos',
        componente: 3490,
        amt: 2100,
    },
];

export default class Example extends PureComponent {

    render() {
        return (

            <ResponsiveContainer width="100%" height="100%" >
                <div className="chart">
                    <BarChart
                        width={800}
                        height={300}
                        data={data}
                        margin={{
                            top: 10,
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
                        <Bar dataKey="componente" fill="#26658c" />
                    </BarChart>
                </div>
            </ResponsiveContainer>
        );
    }
}
