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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-filter backdrop-blur-5xl backdrop-brightness-110 backdrop-opacity-90 shadow-sm">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div class="text-4xl font-Tangerine content-center md:px-10 py-2">
          aliAs09.com
        </div>
        <Navbar currentPath={currentPath} />
      </div>
    </header>
  );
};

export default Header;
