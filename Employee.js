function Employee({ EmployeeData }) {
    return (<div className="EmployeeDiv">
        <img src src={EmployeeData.avatar} className="avatar" />
        <div>
            <h2>{EmployeeData.name}</h2>

            <p><strong>Email:</strong></p>
            {EmployeeData.email}

            <p><strong>Phone:</strong></p>
            {EmployeeData.phone}
            <p><strong>Skills:</strong></p>
            {EmployeeData.skills}
        </div>
    </div>
    );
}


export default Employee;