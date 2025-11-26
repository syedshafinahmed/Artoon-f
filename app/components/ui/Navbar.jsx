"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";

export default function Navbar() {
  const { user, logout, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      if (logout) await logout();
      if (setUser) setUser(null);

      await Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have successfully logged out.",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push("/");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "Something went wrong while logging out.",
      });
    }
  };

  const links = (
    <nav>
      <Link className="px-3 py-2 text-gray-500 font-bold text-sm nav-link hover:text-blue-600" href="/">
        Home
      </Link>
      <Link className="px-3 py-2 text-gray-500 font-bold text-sm nav-link hover:text-blue-600" href="/aboutus">
        About Us
      </Link>
      <Link className="px-3 py-2 text-gray-500 font-bold text-sm nav-link hover:text-blue-600" href="/arts">
        Arts
      </Link>
      <Link className="px-3 py-2 text-gray-500 font-bold text-sm nav-link hover:text-blue-600" href="/blogs">
        Blogs
      </Link>
      <Link className="px-3 py-2 text-gray-500 font-bold text-sm nav-link hover:text-blue-600" href="/addarts">
        Add Arts
      </Link>
      <Link className="px-3 py-2 text-gray-500 font-bold text-sm nav-link hover:text-blue-600" href="/managearts">
        Manage Arts
      </Link>
    </nav>
  );

  return (
    <nav className="w-full sticky top-0 z-50 bg-base-200/80 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <span className="flex items-center text-xl ml-2 lg:ml-0">
            <img src="/art.png" alt="Logo" width={32} height={32} className="w-8 h-8" />
            <p className="ml-2 text-4xl font-black bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Artoon
            </p>
          </span>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center flex-1">
          <div className="flex space-x-4">{links}</div>
        </div>

        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="btn w-20 text-base-200 border-none shadow-none text-xs bg-linear-to-b from-blue-400 to-blue-600"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn w-20 text-base-200 border-none shadow-none text-xs bg-linear-to-b from-blue-400 to-blue-600"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Photo"
                  width={35}
                  height={35}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                />
              )}
              <button
                onClick={handleLogout}
                className="btn w-20 text-base-200 border-none shadow-none text-xs bg-linear-to-b from-blue-400 to-blue-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 border-t border-gray-200 bg-base-200/95">
          {links}
        </div>
      )}
    </nav>
  );
}
