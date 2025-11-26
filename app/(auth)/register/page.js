// 'use client';

// import { useForm } from "react-hook-form";
// import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { useState, useContext } from "react";
// import { Button } from "@/app/components/ui/button";
// import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
// import { Input } from "@/app/components/ui/input";
// import { Label } from "@/app/components/ui/label";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import { useRouter, useSearchParams } from "next/navigation";
// import { UserContext } from "@/context/UserContext";

// export default function RegisterPage() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const { setUser } = useContext(UserContext);
//   const searchParams = useSearchParams();
//   const redirectTo = searchParams.get("redirect") || "/";

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
//       const user = userCredential.user;

//       setUser({
//         email: user.email,
//         uid: user.uid,
//         displayName: user.displayName || data.name,
//         photoURL: user.photoURL || "/default-avatar.png",
//       });

//       await Swal.fire({ icon: "success", title: "Registration Successful", text: `Welcome, ${data.name}!`, timer: 1500, showConfirmButton: false });
//       router.push(redirectTo);
//     } catch (err) {
//       console.error(err);
//       Swal.fire({ icon: "error", title: "Registration Failed", text: err.message || "Something went wrong" });
//     }
//     setLoading(false);
//   };

//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       setUser({
//         email: user.email,
//         uid: user.uid,
//         displayName: user.displayName || "User",
//         photoURL: user.photoURL || "/default-avatar.png",
//       });

//       await Swal.fire({ icon: "success", title: "Login Successful", text: `Welcome back, ${user.displayName || user.email}!`, timer: 1500, showConfirmButton: false });
//       router.push(redirectTo);
//     } catch (err) {
//       console.error(err);
//       Swal.fire({ icon: "error", title: "Login Failed", text: "Something went wrong with Google login" });
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center mt-20">
//       <Card className="w-full min-h-screen max-w-sm">
//         <CardHeader>
//           <span className="bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent font-black text-2xl">
//             <CardTitle>Create your account</CardTitle>
//           </span>
//           <span className="text-xs">
//             <CardDescription>Enter your details below to register</CardDescription>
//           </span>
//           <CardAction>
//             <Button variant="link"><Link href="/login">Login</Link></Button>
//           </CardAction>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="flex flex-col gap-6">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" type="text" placeholder="Your Name" {...register("name", { required: "Name is required" })} disabled={loading} />
//                 {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" placeholder="m@example.com" {...register("email", { required: "Email is required" })} disabled={loading} />
//                 {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input id="password" type="password" {...register("password", { required: "Password is required" })} disabled={loading} />
//                 {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
//               </div>
//             </div>
//             <Button type="submit" className="w-full btn bg-linear-to-b from-blue-400 to-blue-600 mt-4" disabled={loading}>
//               {loading ? "Registering..." : "Register"}
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="flex-col gap-2">
//           <Button onClick={handleGoogleLogin} variant="outline" className="w-full btn border border-blue-600 text-blue-600 text-sm" disabled={loading}>
//             Continue with Google
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState, useContext } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  // Get the previous page or default to "/"
  const redirectTo =
    typeof window !== "undefined" && window.history.state?.idx > 0
      ? document.referrer || "/"
      : "/";

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      setUser({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName || data.name,
        photoURL: user.photoURL || "/default-avatar.png",
      });

      await Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: `Welcome, ${data.name}!`,
        timer: 1500,
        showConfirmButton: false,
      });
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message || "Something went wrong",
      });
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      setUser({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName || "User",
        photoURL: user.photoURL || "/default-avatar.png",
      });

      await Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${user.displayName || user.email}!`,
        timer: 1500,
        showConfirmButton: false,
      });
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong with Google login",
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <Card className="w-full min-h-screen max-w-sm">
        <CardHeader>
          <span className="bg-linear-to-b from-blue-400 to-blue-600 bg-clip-text text-transparent font-black text-2xl">
            <CardTitle>Create your account</CardTitle>
          </span>
          <span className="text-xs">
            <CardDescription>
              Enter your details below to register
            </CardDescription>
          </span>
          <CardAction>
            <Button variant="link">
              <Link href="/login">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  disabled={loading}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: "Email is required" })}
                  disabled={loading}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  disabled={loading}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full btn bg-linear-to-b from-blue-400 to-blue-600 mt-4"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full btn border border-blue-600 text-blue-600 text-sm"
            disabled={loading}
          >
            Continue with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
