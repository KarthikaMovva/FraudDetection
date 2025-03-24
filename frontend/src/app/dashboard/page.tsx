"use client";
import FraudAppsList from "@/app/component/FraudAppsList";
import FraudUrlsList from "@/app/component/FraudUrlsList";
import TrendChart from "@/app/component/TrendChart";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Fraud Monitoring Dashboard</h1>
      <FraudAppsList />
      <FraudUrlsList />
      <TrendChart />
      {/* <ToastContainer position="top-right" autoClose={3000} theme="colored" /> */}
    </div>
  );
}
