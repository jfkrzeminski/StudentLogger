import React, { useState } from 'react';
import WaffleMenu from './components/WaffleMenu';
import StudentList from './components/StudentList';
import { Student } from './types';
import './App.css';

const initialStudents: Student[] = [
  { id: 1, name: 'Student 1', status: 'Checked Out', imageUrl: 'https://via.placeholder.com/40', time: '' },
  { id: 2, name: 'Student 2', status: 'Checked Out', imageUrl: 'https://via.placeholder.com/40', time: '' },
];

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const handleAddStudent = (name: string, status: 'Checked In' | 'Checked Out', imageUrl: string) => {
    const id = Math.max(...students.map(student => student.id)) + 1;
    const newStudent: Student = { id, name, status, time: new Date().toLocaleTimeString(), imageUrl };
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

  const checkedInStudents = students.filter(student => student.status === 'Checked In');

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Checked In Students</h2>
        <ul className="student-list">
          {checkedInStudents.map(student => (
            <li key={student.id} className="student-item">
              <div className={`student-box ${student.status === 'Checked In' ? 'checked-in' : 'checked-out'}`}>
                <img src={student.imageUrl} alt={student.name} className="student-image" />
                <span>{student.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h1>Student Check-In/Out</h1>
        <WaffleMenu onAddStudent={handleAddStudent} />
        <StudentList students={students} toggleStatus={toggleStatus} updateStudentImage={updateStudentImage} />
      </div>
    </div>
  );
};

export default App;
