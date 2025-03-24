"use client";
import data from "@/app/data/assignment.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function FraudAppsList() {

  const router = useRouter();
  
  const handleInvestigate = (appName: string) => {
    toast.info(`Investigation started for ${appName}`, {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const handleBlock=(appname:string)=>{
    toast.error(`${appname} is Blocked`,{
      position : "top-right",
      autoClose : 3000
    })
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Fraudulent Apps</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th>App Name</th>
            <th>Developer</th>
            <th>Category</th>
            <th>Risk Level</th>
            <th>Reported On</th>
            <th>Block</th>
            <th>Investigate</th>
          </tr>
        </thead>
        <tbody>
          {data.fraudulent_apps.map((app, index) => (
            <tr key={index} className="border-t">
              <td>{app.app_name}</td>
              <td>{app.developer}</td>
              <td>{app.category}</td>
              <td>{app.risk_level}</td>
              <td>{app.reported_on}</td>
              <td>
                <button onClick={()=>handleBlock(app.app_name)} className="px-4 py-2 mt-2 mb-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition-all duration-300 cursor-pointer">
                  Block
                </button>
              </td>
              <td>
                <button
                  onClick={()=>handleInvestigate(app.app_name)}
                  className="px-4 py-2 mt-2 mb-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl shadow-md transition-all duration-300 cursor-pointer"
                >
                  Investigate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button   onClick={() => router.push("/Add")} className="px-4 py-2 mt-2 mb-2 bg-blue-400 hover:bg-blue-700 text-black rounded-xl shadow-md transition-all duration-300 cursor-pointer">Import Fraud Apps</button>
    </div>
  );
}
