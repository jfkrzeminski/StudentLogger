import React, { useState } from 'react';
import WaffleMenu from './components/WaffleMenu';
import StudentList from './components/StudentList/StudentList';
import { Student } from './types';
import './App.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  
  const handleAddStudent = (name: string, status: "Checked In" | "Checked Out", imageUrl: string) => {
    const id = Math.max(...students.map(student => student.id), 0) + 1;
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
        <ul className="checked-out-student-list">
          {students
            .filter(student => student.status === 'Checked Out')
            .map((student, index) => (
              <li key={student.id} className="checked-out-student-item">
                <div className={`checked-out-student-box`}>
                  <div className="checked-out-student-info">
                    <div className="checked-out-student-image-container">
                      <img
                        src={student.imageUrl || 'https://via.placeholder.com/60'}
                        alt="Student Image"
                        className="checked-out-student-image"
                      />

                    </div>
                    <span>{student.name}</span>
                  </div>
                  <button className="check-in-button" onClick={() => toggleStatus(student.id)}>Check In</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
