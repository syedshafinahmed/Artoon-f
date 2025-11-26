"use client";

import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import Swal from "sweetalert2";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(UserContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      Swal.fire({
        icon: "warning",
        title: "Access Denied",
        text: "You must be logged in to access this page",
        timer: 1500,
        showConfirmButton: false,
      });

      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [user, loading, router, pathname]);

  if (loading || !user) return null; 

  return <>{children}</>;
}
