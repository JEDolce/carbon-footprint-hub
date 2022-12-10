import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#78909C', '#595959', '#045E85'];

export default function ChartPie({ scopes }) {

    const data = [
        { name: 'Alcance 1', value: scopes[0] },
        { name: 'Alcance 2', value: scopes[1] },
        { name: 'Alcance 3', value: scopes[2] },
    ];

    return (
        <div className='chart'>
            <PieChart width={400} height={300} onMouseEnter={PureComponent.onPieEnter}>
                <Pie
                    data={data}
                    cx="center"
                    cy="center"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </div>
    );
}