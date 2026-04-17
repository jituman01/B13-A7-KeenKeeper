import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToStoredTimeline } from "../utils/localDb";
import toast from "react-hot-toast";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineArchive, MdDeleteOutline } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriend(data.find((f) => f.id === parseInt(id))));
  }, [id]);

  const handleAction = (type) => {
    const entry = {
      id: Date.now(),
      title: `${type} with ${friend.name}`,
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    addToStoredTimeline(entry);
    toast.success(`${type} with ${friend.name}`);
  };

  if (!friend) return <div className="p-20 text-center font-bold text-slate-500">Loading Profile...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <img 
              src={friend.picture} 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-slate-50" 
            />
            <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>
            <div className="flex flex-col items-center gap-2 mt-2">
              <span className={`px-4 py-0.5 rounded-full text-[10px] font-bold uppercase text-white ${friend.status === 'overdue' ? 'bg-rose-500' : 'bg-yellow-500'}`}>
                {friend.status}
              </span>
              <span className="bg-emerald-50 text-emerald-700 px-4 py-0.5 rounded-full text-[10px] font-bold uppercase border border-emerald-100">
                {friend.tags[0]}
              </span>
            </div>
            <p className="mt-4 text-slate-500 text-sm italic">"{friend.bio}"</p>
            <p className="text-slate-400 text-xs mt-1">Preferred: email</p>
          </div>

          
          <div className="space-y-2">
            <button className="w-full flex items-center justify-center gap-2 bg-white py-3 border border-slate-200 rounded-xl font-bold text-slate-700  shadow-sm">
              <HiOutlineBell size={18}/> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white py-3 border border-slate-200 rounded-xl font-bold text-slate-700  shadow-sm">
              <MdOutlineArchive size={18}/> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-white py-3 border border-rose-100 rounded-xl font-bold text-rose-500  shadow-sm">
              <MdDeleteOutline size={18}/> Delete
            </button>
          </div>
        </div>

        
        <div className="lg:col-span-8 space-y-6">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-4xl font-black text-slate-800">{friend.days_since_contact}</p>
              <p className="text-[10px] text-slate-400 uppercase  mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-4xl font-black text-slate-800">{friend.goal}</p>
              <p className="text-[10px] text-slate-400 uppercase  mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <p className="text-xl font-bold text-slate-800 pt-2">{friend.next_due_date}</p>
              <p className="text-[10px] text-slate-400 uppercase  mt-2">Next Due</p>
            </div>
          </div>

           {/* rls goal section */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Relationship Goal</h4>
              <p className="text-xs text-slate-500 mt-1">Connect every <span className="font-bold text-slate-800">{friend.goal} days</span></p>
            </div>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[10px] font-bold  ">EDIT</button>
          </div>

          {/* quick check section */}


          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => handleAction('Call')}
                className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600">
                <IoCallOutline size={28} className=" group-hover:text-emerald-600"/>
                <span className="text-xs font-bold">Call</span>
              </button>


              <button 
                onClick={() => handleAction('Text')}

                className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 ">
                <AiOutlineMessage size={28} className=" group-hover:text-emerald-600"/>
                <span className="text-xs font-bold">Text</span>
              </button>

              <button 
                onClick={() => handleAction('Video')}
                className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 ">
                <AiOutlineVideoCamera size={28} className=" group-hover:text-emerald-600"/>
                <span className="text-xs font-bold">Video</span>
              </button>
            </div>
          </div>

    

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;