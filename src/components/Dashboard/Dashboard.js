import React from 'react';
import  { PureComponent } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
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
        <div>

            <h4 className='text-2xl font-mono font-bold text-purple-700 mb-10' >Investment vs Revenue</h4>


            <div className='grid md:grid-cols-1 lg:grid-cols-2 mx-12 pb-5 mt-20 gap-10'>
                <LineChart width={400} height={300} data={data}>

                    <Line dataKey={"sell"}></Line>
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"sell"}></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>

                </LineChart>



                <BarChart width={400} height={300} data={data}>
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"investment"}></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>


                <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>


        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip></Tooltip>
          <Legend></Legend>
        </PieChart>


            </div>



        </div>
    );
};

export default Dashboard;