import React from "react";
import '../components/emergency_style.css';

const patient_data = [
  { PatientID: 1, PatientName: "Hari", PatientContact: 1234567890, DateOfAppointment: "12/02/2023", DoctorID: 1001, DoctorName: "Decl" },
]

const Emergency = () => {
  return (
    <div>
      <h1>Receptionist / Emergency</h1>
      <h2>Emergency</h2>
      <div>
        <form action="">
          <label htmlFor="name">
            <h5>Name: </h5>
          </label>
          <input type="text" name="name" id="name" />
          <br></br>
          <br></br>
          <button type="submit">Admit</button>
        </form>
      </div>
      <div>
        <h2>List of Patients</h2>
        <table>
          <tr>
            <th>PatientID</th>
            <th>PatientName</th>
            <th>PatientContact</th>
            <th>DateOfAppointment</th>
            <th>DoctorID</th>
            <th>DoctorName</th>
          </tr>
          {patient_data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.PatientID}</td>
                <td>{val.PatientName}</td>
                <td>{val.PatientContact}</td>
                <td>{val.DateOfAppointment}</td>
                <td>{val.DoctorID}</td>
                <td>{val.DoctorName}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default Emergency;
