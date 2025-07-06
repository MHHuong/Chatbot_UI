import { ChevronFirst, ChevronLast } from "lucide-react";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type SidebarProps = {
  children: ReactNode;
};
const SidebarContext = createContext<{ expanded: boolean }>({ expanded: true });
export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-base-100 border-r border-gray-700 shadow-sm">
        <div
          className={`p-4 pb-2 flex items-center transition-all duration-300 ${
            expanded ? "justify-end" : "justify-center"
          }`}
        >
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg  hover:bg-indigo-50 text-gray-600"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}
type SidebarItemProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
};
export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative group flex items-center gap-2 py-2 px-3 my-1
        font-medium rounded-md cursor-pointer transition-colors
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
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
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2
               whitespace-nowrap rounded-md bg-indigo-100 text-indigo-800 
               text-sm px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 
               transition-opacity duration-300 pointer-events-none"
        >
          {text}
        </div>
      )}
    </li>
  );
}
