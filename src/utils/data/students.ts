interface StudentProps {
  name: string;
  status: boolean;
  email: string;
  notas: number[];
}

export const studentsData: StudentProps[] = [
  {
    name: "John Doe",
    email: "tammera3231@uorak.com",
    status: true,
    notas: [10, 4.25],
  },
  {
    name: "Jane Doe",
    email: "pennie6789@uorak.com",
    status: false,
    notas: [5, 1.2],
  },
  {
    name: "Fulano de Tal",
    email: "najiba5788@uorak.com",
    status: true,
    notas: [8, 2],
  },
  {
    name: "Beltrano de Tal",
    email: "carmina3800@uorak.com",
    status: false,
    notas: [3, 3.5],
  },
  {
    name: "Ciclano de Tal",
    email: "lincoln809@uorak.com",
    status: true,
    notas: [7, 8.2],
  },
];
