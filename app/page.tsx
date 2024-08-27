"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "./context/store";
import Navbar from "./components/Navbar";

export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  useEffect(() => {
    if (user?.token) {
      router.push("/blogs");
    } else {
      router.push("/signin");
    }
  }, [user, router]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Content can be added here if needed */}
      </main>
    </>
  );
}
