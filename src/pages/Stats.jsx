import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { getStoredTimeline } from "../utils/localDb";

const Stats = () => {
  const activities = getStoredTimeline();
  const data = [
    { name: 'Text', value: activities.filter(a => a.type === 'Text').length },
    { name: 'Call', value: activities.filter(a => a.type === 'Call').length },
    { name: 'Video', value: activities.filter(a => a.type === 'Video').length },
  ];
  const COLORS = ['#7E35E1', '#244D3F', '#37A163'];

  return (
    <div className="max-w-7xl mx-auto p-1 0">
      <h1 className="text-5xl font-black text-slate-800 mb-12">Friendship Analytics</h1>
      <div className="bg-white p-12 rounded-sm shadow-sm  h-[500px]">
        <h2 className='text-[#244D3F] font-medium text-xl'>By Interaction Type</h2>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie data={data} innerRadius={80} outerRadius={120} paddingAngle={8} dataKey="value">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;