// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import StudentIcon from './components/StudentIcon';
import StudentList from './components/StudentList';
import { Student } from './types';
import './App.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'John Doe', status: 'Checked In' },
    { id: 2, name: 'Jane Smith', status: 'Checked In' },
    { id: 3, name: 'Alice Johnson', status: 'Checked In' },
    { id: 4, name: 'Bob Brown', status: 'Checked In' }
  ]);

  const toggleStatus = (id: number) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id
          ? { ...student, status: student.status === 'Checked In' ? 'Checked Out' : 'Checked In', time: new Date().toLocaleTimeString() }
          : student
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {students.map(student => (
          <StudentIcon key={student.id} student={student} toggleStatus={toggleStatus} />
        ))}
      </div>
      <StudentList students={students} />
    </div>
  );
};

export default App;
