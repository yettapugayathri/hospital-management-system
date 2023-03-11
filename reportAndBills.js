import React from "react";
const ReportsAndBills = () => {
  return (
    <div>
      <h1>PATIENT REPORT</h1>
      <form action="">
        <label htmlFor="PatientID">PatientID: </label>
        <input id="PatientID" name="PatientID" type="number" />
        <br></br>
        <label htmlFor="PatientName">PatientName: </label>
        <input id="PatientName" name="PatientName" type="text" />
        <br></br>
        <label htmlFor="DoctorID">DoctorID: </label>
        <input id="DoctorID" name="DoctorID" type="number" />
        <br></br>
        <label htmlFor="DoctorName">DoctorName: </label>
        <input id="DoctorName" name="DoctorName" type="text" />
        <br></br>
        <label htmlFor="DateOfAppointment">DateOfAppointment: </label>
        <input id="DateOfAppointment" name="DateOfAppointment" type="date" />
        <br></br>
        <label htmlFor="Room">Room: </label>
        <input id="Room" name="Room" type="text" />
        <br></br>
        <label htmlFor="Roomtype">Roomtype: </label>
        <input id="Roomtype" name="Roomtype" type="text" />
        <br></br>
        <label htmlFor="Medicine">Medicine: </label>
        <input id="Medicine" name="Medicine" type="text" />
        <br></br>
        <label htmlFor="Description">Description: </label>
        <input id="Description" name="Description" type="text" />
      </form>
    </div>
  );
};
export default ReportsAndBills;
