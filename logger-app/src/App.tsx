import React, { useState } from 'react';
import StudentList from './components/StudentList';
import { Student } from './types';
import initialStudents from './components/studentsData';
import WaffleMenu from './components/WaffleMenu';
import './styles.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (entry: string) => {
    setLog(prevLog => [...prevLog, entry]);
  };

  const toggleStatus = (id: number) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, status: student.status === 'Checked In' ? 'Checked Out' : 'Checked In' } : student
    ));
    const student = students.find(student => student.id === id);
    if (student) {
      addLog(`${student.name} checked ${student.status === 'Checked In' ? 'Checked Out' : 'Checked In'} at ${new Date().toLocaleTimeString()}`);
    }
  };

  const updateStudentImage = (id: number, imageUrl: string) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, imageUrl } : student
    ));
  };

  const handleAddStudent = (name: string, status: string, imageUrl: string) => {
    const id = Math.max(...students.map(student => student.id)) + 1;
    const newStudent: Student = { id, name, status: status as 'Checked In' | 'Checked Out', time: new Date().toLocaleTimeString(), imageUrl };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <WaffleMenu onAddStudent={handleAddStudent} />
      <h1>Student Check-In/Out</h1>
      <StudentList students={students} toggleStatus={toggleStatus} updateStudentImage={updateStudentImage} />
      <div>
        <h2>Activity Log</h2>
        <ul>
        {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
         
