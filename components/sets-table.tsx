import { PenBoxIcon } from "lucide-react";

export default function SetsTable() {
  const headerStyle = "border bg-emerald-900 text-sm py-1 text-center"
  const cellStyle = "border text-center text-lg py-1";

  return (
    <div className="flex flex-col items-center w-full">
      <table className="mb-3 w-full">
        <thead>
          <tr>
            <th className={headerStyle}>SÉRIES</th>
            <th className={headerStyle}>REPETIÇÕES</th>
            <th className={headerStyle}>CARGA (KG)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cellStyle}>1</td>
            <td className={cellStyle}>12 - 15</td>
            <td className={cellStyle}>10 - 15</td>
          </tr>
          <tr>
            <td className={cellStyle}>3 - 4</td>
            <td className={cellStyle}>6 - 8</td>
            <td className={cellStyle}>40</td>
          </tr>
        </tbody>
      </table>
      <button className="flex gap-1 mr-2 self-end text-sm">
        <PenBoxIcon size={24} />
      </button>
    </div>
  )
}