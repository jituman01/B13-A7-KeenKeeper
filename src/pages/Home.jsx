import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setTimeout(() => setLoading(false), 300);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-teal-900 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h1 className="text-5xl font-extrabold text-slate-800 mb-4">Friends to keep close</h1>
      <p className="text-slate-500 mb-12 max-w-2xl mx-auto font-medium">Your personal shelf of meaningful connections.</p>
      <button className="bg-teal-900 text-white px-8 py-3 rounded-xl font-bold mb-16 hover:bg-teal-950">+ Add a Friend</button>

      <div className="container mx-uto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
          <h2 className="text-4xl font-bold mb-2">10</h2>
          <p className="text-slate-500 font-medium text-sm">Total Friends</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
          <h2 className="text-4xl font-bold  mb-2">3</h2>
          <p className="text-slate-500 font-medium text-sm">On Track</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
          <h2 className="text-4xl font-bold  mb-2">6</h2>
          <p className="text-slate-500 font-medium text-sm">Need Attention</p>
        </div>

        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-md">
          <h2 className="text-4xl font-bold  mb-2">12</h2>
          <p className="text-slate-500 font-medium text-sm">Interactions This Month</p>
        </div>

      </div>
      </div>
      
      <div className="mb-10">
         <div className="divider"></div>
      </div>
      <h2 className="text-2xl font-bold flex justify-start mb-4">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gapy-8 ">
        {friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
      </div>
    </div>
  );
};

export default Home;