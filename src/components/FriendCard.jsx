import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();
  const colors = { "overdue": "bg-red-500", "almost due": "bg-amber-500", "on-track": "bg-emerald-600" };

  return (
    <div onClick={() => navigate(`/friend/${friend.id}`)} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl cursor-pointer transition-all duration-300 mb-2 mr-2">
      <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
      <h3 className="text-xl font-bold text-slate-800">{friend.name}</h3>
      <p className="text-slate-400 text-sm mb-4">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map(tag => <span key={tag} className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-md uppercase">{tag}</span>)}
      </div>
      
      
      <div className={`${colors[friend.status]}
       text-white text-xs py-2 rounded-full font-bold uppercase`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;