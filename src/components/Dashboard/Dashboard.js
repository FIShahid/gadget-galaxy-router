import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid llg:grid-cols-2'>
           

            <div className='px-40 mt-10'>
                <h4 className='text-2xl font-mono font-bold text-purple-700 mb-10' >Investment vs Revenue</h4>
                <LineChart width={400} height={300} data={data}>

                    <Line dataKey={"sell"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"sell"}></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>

                </LineChart>

                <div className='flex items-center mt-20'>
                
        <BarChart width={400} height={300} data={data}>
          <Bar dataKey="sell" fill="#8884d8" />
          <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"sell"}></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
        </BarChart>
     
                </div>
            </div>
        </div>
    );
};

export default Dashboard;