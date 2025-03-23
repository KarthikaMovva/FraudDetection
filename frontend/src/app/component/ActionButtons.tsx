export default function ActionButtons() {
    return (
      <div className="mt-6 flex gap-4">
        <button className="bg-red-500 text-white p-2 rounded">Report Fraud</button>
        <button className="bg-yellow-500 text-white p-2 rounded">Block Entity</button>
        <button className="bg-blue-500 text-white p-2 rounded">Investigate</button>
      </div>
    );
  }
  