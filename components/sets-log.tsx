//import { PenLine } from "lucide";

export default function SetsLog() {
  const headerStyle = "border text-center"
  const cellStyle = "border text-center text-lg py-1";

  return (
    <div className="flex flex-col items-center w-full">
      <table className="mb-3 w-full">
        <tr>
          <th className={headerStyle}>REPETIÇÕES</th>
          <th className={headerStyle}>CARGA (KG)</th>
        </tr>
        <tr>
          <td className={cellStyle}>12 - 15</td>
          <td className={cellStyle}>10 - 20</td>
        </tr>
        <tr>
          <td className={cellStyle}>6 - 8</td>
          <td className={cellStyle}>40</td>
        </tr>
      </table>
      <button className="">Editar</button>
    </div>
  )
}