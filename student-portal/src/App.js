import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentList from './StudentList';
import './App.css';

function App() {
  const initialStudents = [
    { name: "John Doe", roll: "101", department: "Computer Science", semester: "4th", cgpa: 8.5, photo: "https://placehold.co/100" },
    { name: "Sarah Smith", roll: "102", department: "Mathematics", semester: "4th", cgpa: 9.2, photo: "https://placehold.co/100" },
    { name: "Mike Johnson", roll: "103", department: "Physics", semester: "4th", cgpa: 7.8, photo: "https://placehold.co/100" }
  ];

  const [students, setStudents] = useState(initialStudents);

  const sortStudents = () => {
    const sorted = [...students].sort((a, b) => b.cgpa - a.cgpa);
    setStudents(sorted);
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button className="sort-btn" onClick={sortStudents}>
          Sort Students by Highest CGPA
        </button>
      </div>
      <StudentList students={students} />
      <Footer />
    </div>
  );
}

export default App;
