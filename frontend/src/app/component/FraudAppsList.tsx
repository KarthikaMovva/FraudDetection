import data from "@/app/data/assignment.json";

export default function FraudAppsList() {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
