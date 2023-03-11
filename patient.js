import React from "react";
const Patient = () => {
  return (
    <div>
      <h1>ADMIT PATIENT</h1>
      <p>The patient must have had an appointment before being admitted.</p>
      <form action="">
        <label htmlFor="PatientID"> <h5>PatientID: </h5> </label>
        <input id="PatientID" name="PatientID" type="number" />
        <label htmlFor="DateOfAppointment"> <h5>DateOfAppointment: </h5> </label>
        <input id="DateOfAppointment" name="DateOfAppointment" type="date" />
        <label htmlFor="Roomtype"> <h5>Roomtype: </h5> </label>
        <input id="Roomtype" name="Roomtype" type="text" />
        <br></br>
        <br></br>
        <button type="submit">Admit</button>
      </form>
    </div>
  );
};

export default Patient;
