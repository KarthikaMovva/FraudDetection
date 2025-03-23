"use client";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
import FraudAppsList from "@/app/component/FraudAppsList";
import FraudUrlsList from "@/app/component/FraudUrlsList";
import TrendChart from "@/app/component/TrendChart";
import ActionButtons from "@/app/component/ActionButtons";

export default function Dashboard() {
//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       router.push("/");
//     }
//   }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Fraud Monitoring Dashboard</h1>
      <FraudAppsList />
      <FraudUrlsList />
      <TrendChart />
      <ActionButtons />
    </div>
  );
}
