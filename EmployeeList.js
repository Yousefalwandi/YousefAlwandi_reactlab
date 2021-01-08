import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
    const [employees, setEmployess] = useState([

        {
            name: "Yazeen Jasim",
            email: "yazeen.jasim@softhouse.se",
            phone: "0700000",
            skills: "React, C++, JS",
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },

        {
            name: "Yousef Alwandi",
            email: "Yousefcm5@gmail.com",
            phone: "0763075000",
            skills: "Java, JS, HTML&CSS",
            avatar: "https://i.imgur.com/Q9qFt3m.png",

        }
    ]);

    function handelAddNewEmp() {
        setEmployess((prevState) => {
            return [
                ...prevState,
                {
                    name: "Sara Svensson",
                    email: "sara@hotmail.com",
                    phone: "07011111",
                    skills: "None",
                    avatar: "https://i.imgur.com/TUhCrsY.png",
                },
            ];

        });

    }
    return (
        <div>
            <h3>EmpolyeeList</h3>
            <button onClick={handelAddNewEmp} className="button">Add Employee</button>
            {employees.map((employee) => (
                <Employee EmployeeData={employee} />
            ))}

        </div>
    );

}
export default EmployeeList;