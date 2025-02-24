import { asset } from "$fresh/runtime.ts";
import { FunctionalComponent } from "preact";

const NavLink: FunctionalComponent<
  { to: string; children: string; active: boolean }
> = ({ to, children, active }) => {
  return (
    <a
      href={to}
      className={`px-4 py-2 rounded-lg transition-all ${
        active ? "text-blue-500" : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </a>
  );
};

const Navbar: FunctionalComponent<{ currentPath: string }> = (
  { currentPath },
) => {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-100">
      <NavLink to="/" active={currentPath === "/"}>Home</NavLink>
      <NavLink to="/skills" active={currentPath === "/skills"}>Skills</NavLink>
      <NavLink to="/works" active={currentPath === "/works"}>
        Works
      </NavLink>
    </nav>
  );
};

const Header: FunctionalComponent<{ currentPath: string }> = (
  { currentPath },
) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div class='.lavishly-yours-regular'>aliAs Portfolio</div>
      <Navbar currentPath={currentPath} />
    </header >
  );
};

export default Header;
