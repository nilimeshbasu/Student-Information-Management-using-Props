import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentList from './StudentList';
import './App.css';

function App() {
  // We updated the names and gave them colorful placeholder photos!
  const initialStudents = [
    { name: "katha", roll: "101", department: "Computer Science", semester: "4th", cgpa: 8.5, photo: "https://placehold.co/100/FFB6C1/FFFFFF?text=K" },
    { name: "Nilimesh", roll: "102", department: "Mathematics", semester: "4th", cgpa: 9.2, photo: "https://placehold.co/100/87CEFA/FFFFFF?text=N" },
    { name: "piuli", roll: "103", department: "Physics", semester: "4th", cgpa: 7.8, photo: "https://placehold.co/100/98FB98/FFFFFF?text=P" }
  ];

  const [students, setStudents] = useState(initialStudents);

  const sortStudents = () => {
    const sorted = [...students].sort((a, b) => b.cgpa - a.cgpa);
    setStudents(sorted);
  };

  return (
    <div className="app-container">
      <Header />
      
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button className="sort-btn" onClick={sortStudents}>
          Sort Students by Highest CGPA
        </button>
      </div>

      {/* Here is the new Table you asked for! */}
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Dept</th>
              <th>Semester</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.roll}>
                <td><img src={student.photo} alt={student.name} width="40" style={{borderRadius: '50%'}}/></td>
                <td><strong>{student.name}</strong></td>
                <td>{student.roll}</td>
                <td>{student.department}</td>
                <td>{student.semester}</td>
                <td className="cgpa-highlight">{student.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The cards are still here below the table */}
      <StudentList students={students} />
      <Footer />
    </div>
  );
}

export default App;