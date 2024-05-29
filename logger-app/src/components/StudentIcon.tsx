// src/components/StudentIcon.tsx
import React from 'react';
import { Student } from '../types';

interface StudentIconProps {
  student: Student;
  toggleStatus: (id: number) => void;
}

const StudentIcon: React.FC<StudentIconProps> = ({ student, toggleStatus }) => {
  return (
    <div onClick={() => toggleStatus(student.id)} style={{ cursor: 'pointer', padding: '10px', border: '1px solid black', margin: '5px', display: 'inline-block' }}>
      <p>{student.name}</p>
      <p>{student.status}</p>
    </div>
  );
};

export default StudentIcon;
