import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineClock } from "react-icons/hi";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/", icon: <AiOutlineHome></AiOutlineHome> },
    { name: "Timeline", path: "/timeline", icon: <HiOutlineClock></HiOutlineClock>},
    { name: "Stats", path: "/stats", icon: <TfiStatsUp></TfiStatsUp> },
  ];

  return (
    <nav className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:-mr-190 md:mr-110 mx-auto px-10 py-5 bg-white border-b sticky top-0 z-50">
      <div className="text-2xl font-bold text-teal-900">KeenKeeper</div>
      <div className="flex gap-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                isActive ? "bg-teal-900 text-white" : "text-gray-500 hover:bg-gray-100"
              }`
            }
          >
            {link.icon} {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;