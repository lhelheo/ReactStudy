import { studentsData } from "@/utils/data/students";

export default function StudentsTable() {
  return (
    <table className="m-4 border border-primary w-[700px]">
      <thead className="bg-gray-100">
        <tr className="my-10">
          <th>Name</th>
          <th>Age</th>
          <th>Grade 1</th>
          <th>Grade 2</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {studentsData.map((student, index) => (
          <tr key={index} className="border border-gray-100">
            <td className="text-left px-4">
              <div className="flex flex-col">
                <p>{student.name}</p>
                <p>{student.email}</p>
              </div>
            </td>
            <td className="text-center">
              {student.status ? (
                <div className="border border-gray-100 rounded bg-green-400 mx-4 text-white">
                  Ativo
                </div>
              ) : (
                <div className="border border-gray-100 rounded bg-red-400 mx-4 text-white">
                  Inativo
                </div>
              )}
            </td>
            <td className="text-center">{student.notas[0]}</td>
            <td className="text-center">{student.notas[1]}</td>
            <td className="text-center">
              {student.status ? (
                (student.notas[0] + student.notas[1]) / 2
              ) : (
                <p>---</p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
