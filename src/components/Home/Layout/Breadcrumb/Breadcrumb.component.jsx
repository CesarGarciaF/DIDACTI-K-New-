import { LuChevronRight, LuHome } from "react-icons/lu";
import { useLocation, Link } from "react-router-dom";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (pathnames[0] === "home") pathnames.shift();

  return (
    <>
      <div className="text-blue-500">
        <ul className="flex space-x-2 items-center">
          <li className="hover:cursor-pointer hover:underline">
            <Link to="/home" className="hover:text-blue-700 hover:underline">
              <LuHome />
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `${pathnames.slice(0, index + 1).join("/")}`;
            const title = value;

            return (
              <li className="flex items-center" key={to}>
                <LuChevronRight />
                {last ? (
                  <span className="text-gray-700">{title}</span>
                ) : (
                  <Link to={to}>{title}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
