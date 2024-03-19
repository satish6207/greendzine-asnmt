import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";

export default function Content() {
  const data = [
    {
      empid: 1,
      name: "Arjun",
      dob: "16-11-2000",
      role: "Software Engineer",
    },
    {
      empid: 2,
      name: "Mahesh",
      dob: "15-01-2000",
      role: "MongoDb Developer",
    },
    {
      empid: 3,
      name: "Satish",
      dob: "15-05-1996",
      role: "Frontend Developer",
    },
    {
      empid: 4,
      name: "Jhanu",
      dob: "02-09-1996",
      role: "Sql Developer",
    },
    {
      empid: 5,
      name: "Ramesh",
      dob: "09-09-1995",
      role: "NodeJS Developer",
    },
    {
      empid: 6,
      name: "Suresh",
      dob: "17-09-1999",
      role: "Angular Developer",
    },
    {
      empid: 7,
      name: "Alekhya",
      dob: "15-09-1996",
      role: "React Developer",
    },
    {
      empid: 8,
      name: "Madhu",
      dob: "24-03-1998",
      role: "vite Developer",
    },
  ];

  const [name, setName] = useState();

  return (
    <div className="employee-list">
      <SearchBar setName={setName} />
      <div className="card-holder">
        {data.map((item) => (
          <EmployeeCard key={item.empid} data={item} name={name} />
        ))}
      </div>
    </div>
  );
}
