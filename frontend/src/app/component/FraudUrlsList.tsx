import data from "@/app/data/assignment.json";

export default function FraudUrlsList() {
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
          </tr>
        </thead>
        <tbody>
          {data.fraudulent_urls.map((url, index) => (
            <tr key={index} className="border-t">
              <td>{url.url}</td>
              <td>{url.risk_level}</td>
              <td>{url.detected_on}</td>
              <td>{url.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
