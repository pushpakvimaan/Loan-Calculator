export default function AmortizationTable({ schedule, currencySymbol }) {
    if (!schedule.length) return null;
  
    return (
      <div className="overflow-x-auto mt-4 max-h-[400px] overflow-y-auto border rounded">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-2 border">Month</th>
              <th className="p-2 border">EMI</th>
              <th className="p-2 border">Interest</th>
              <th className="p-2 border">Principal</th>
              <th className="p-2 border">Balance</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row) => (
              <tr key={row.month}>
                <td className="p-2 border">{row.month}</td>
                <td className="p-2 border">{currencySymbol}{row.emi}</td>
                <td className="p-2 border">{currencySymbol}{row.interest}</td>
                <td className="p-2 border">{currencySymbol}{row.principal}</td>
                <td className="p-2 border">{currencySymbol}{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  