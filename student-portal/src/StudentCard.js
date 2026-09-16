import React from 'react';

function StudentCard(props) {
  return (
    <div className="card">
      <img src={props.photo} alt="Student Profile" />
      <h2>{props.name}</h2>
      <p><strong>Roll No:</strong> {props.roll}</p>
      <p><strong>Dept:</strong> {props.department}</p>
      <p><strong>Semester:</strong> {props.semester}</p>
      <p><strong>CGPA:</strong> {props.cgpa}</p>
    </div>
  );
}

export default StudentCard;
