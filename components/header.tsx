import { asset } from "$fresh/runtime.ts";
import { FunctionalComponent } from "preact";
import { GlassCard, GlassSection } from "./glassmorphism.tsx";

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
    <nav className="flex space-x-4 p-4">
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
    <header className="justify-between sticky top-0 w-full bg-white/30 backdrop-filter backdrop-blur-md backdrop-brightness-100 backdrop-opacity-50">
      <div className="flex justify-between">
        <div class="text-4xl font-Tangerine content-center md:px-10">
          aliAs09.com
        </div>
        <Navbar currentPath={currentPath} />
      </div>
    </header>
  );
};

export default Header;
