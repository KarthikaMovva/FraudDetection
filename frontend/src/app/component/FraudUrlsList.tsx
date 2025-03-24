import data from "@/app/data/assignment.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FraudUrlsList() {
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
      <h2 className="text-xl font-bold mb-4 mt-8">Fraudulent URLs</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th>URL</th>
            <th>Risk Level</th>
            <th>Detected On</th>
            <th>Category</th>
            <th>Block</th>
            <th>Investigate</th>
          </tr>
        </thead>
        <tbody>
          {data.fraudulent_urls.map((url, index) => (
            <tr key={index} className="border-t">
              <td>{url.url}</td>
              <td>{url.risk_level}</td>
              <td>{url.detected_on}</td>
              <td>{url.category}</td>
              <td className="p-3"><button onClick={()=>handleBlock(url.url)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition-all duration-300 cursor-pointer">
    Block
  </button></td>
              <td><button onClick={()=>handleInvestigate(url.url)} className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-xl shadow-md transition-all duration-300 cursor-pointer">
    Investigate
  </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button  className="px-4 py-2 mt-2 mb-2 bg-blue-400 hover:bg-blue-700 text-black rounded-xl shadow-md transition-all duration-300 cursor-pointer">Import Fraud URLs</button>
    </div>
  );
}
