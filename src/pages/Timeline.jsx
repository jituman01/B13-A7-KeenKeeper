import { useState } from "react";
import { getStoredTimeline } from "../utils/localDb";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineVideoCamera } from "react-icons/ai";

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const activities = getStoredTimeline();
  const filteredData = filter === "All" ? activities : activities.filter(item => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="items-center mb-12">
        <div className="mb-4">
          <h1 className="text-5xl font-black text-slate-800">Timeline</h1>
        </div>
        <select onChange={(e) => setFilter(e.target.value)} className="border border-slate-300 py-3 px-2 pr-40   font-bold">
          <option  value="All"><h2 className="font-medium text-gray-400">Filter timeline</h2></option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-6">
        {filteredData.length > 0 ? filteredData.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border flex items-center gap-6 shadow-sm">
            <div className="p-5 bg-slate-50 rounded-2xl text-teal-800">
               {item.type === 'Call' && <IoCallOutline size={28} />}
               {item.type === 'Text' && <AiOutlineMessage size={28} />}
               {item.type === 'Video' && <AiOutlineVideoCamera size={28} />}
            </div>
            <div>
              <p className="font-bold text-xl text-slate-800">{item.title}</p>
              <p className="text-slate-400 font-medium">{item.date}</p>
            </div>
          </div>
        )) : <div className="text-center py-20 text-slate-300 font-bold text-xl italic border-4 border-dashed rounded-[40px]">No interactions found.</div>}
      </div>
    </div>
  );
};

export default Timeline;