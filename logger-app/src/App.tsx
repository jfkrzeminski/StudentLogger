import React, { useState } from 'react';
import Header from './components/Header';
import CheckInOut from './components/CheckInOut';
import StudentList from './components/StudentList';
import { Student } from './types';
import './App.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const studentNames = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

  const addStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <Header />
      <CheckInOut addStudent={addStudent} studentNames={studentNames} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
