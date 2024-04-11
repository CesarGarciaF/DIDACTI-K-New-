import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LuChevronFirst, LuChevronLast, LuMoreVertical } from "react-icons/lu";
import Logo from "../../../../assets/john-doe-image.png";
import LogoDidac from "../../../../assets/LogoDidactik.png";

const SidebarContext = createContext();

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center relative">
          <img
            src={expanded ? LogoDidac : Logo}
            className={` transition-all ${expanded ? "w-32" : "w-[2.1rem]"}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 absolute top-6 ${
              expanded ? "-right-[76px]" : "-right-[18px]"
            }`}
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img src="" className="w-10 h-10 rounded-md" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Jorge Bernal</h4>
              <span className="text-xs text-gray-600">jabe.4124@gmail.com</span>
            </div>
            <LuMoreVertical size={20} />
          </div>
        </div>
      </nav>
      {/* <div className="flex flex-col w-56 max-h-screen bg-dark-tremor-brand-faint text-white"> */}
    </aside>
  );
}

export function SidebarItem({ icon, text, link, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <Link to={link}>
      <li
        className={`group/item relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm  invisible opacity-20 translate-x-3 transition-all group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
