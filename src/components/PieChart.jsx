import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: 'Alcance 1', value: 400 },
    { name: 'Alcance 2', value: 400 },
    { name: 'Alcance 3', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default class Example extends PureComponent {

    render() {
        return (
            <div className='chart'>
                <PieChart width={400} height={300} onMouseEnter={this.onPieEnter}>
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
}