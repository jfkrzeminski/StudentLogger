import React, { useState } from 'react';
import WaffleMenu from './components/WaffleMenu';
import StudentList from './components/StudentList/StudentList';
import { Student } from './types';
import './App.css';
import CheckedOutStudentList from './components/CheckedOutStudentList/CheckedOutStudentList';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  
  const handleAddStudent = (name: string, status: "Checked In" | "Checked Out", location: string, imageUrl: string) => {
    const id = Math.max(...students.map(student => student.id), 0) + 1;
    const newStudent: Student = { id, name, status,location, time: new Date().toLocaleTimeString(), imageUrl };
    setStudents([...students, newStudent]);
  };

  const toggleStatus = (id: number) => {
    setStudents(students.map(student =>
      student.id === id
        ? { ...student, status: student.status === 'Checked In' ? 'Checked Out' : 'Checked In', time: new Date().toLocaleTimeString() }
        : student
    ));
  };

  const updateStudentImage = (id: number, imageUrl: string) => {
    setStudents(students.map(student =>
      student.id === id
        ? { ...student, imageUrl }
        : student
    ));
  };

  // Filter students by status
  const checkedInStudents = students.filter(student => student.status === 'Checked In');
  const checkedOutStudents = students.filter(student => student.status === 'Checked Out');

  return (
    <div className="App">
      <div className="main-content">
        <h1>Student Check-In/Out</h1>
        <WaffleMenu onAddStudent={handleAddStudent} />
        <StudentList students={students} toggleStatus={toggleStatus} updateStudentImage={updateStudentImage} />
      </div>
      <div className="checkout-sidebar">
        <h2>Checked Out Students</h2>
        <CheckedOutStudentList students={checkedOutStudents} toggleStatus={toggleStatus} />
      </div>
    </div>
  );
};

export default App;
