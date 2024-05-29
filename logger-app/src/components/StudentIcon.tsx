// src/components/StudentIcon.tsx
import React, { useState } from 'react';
import { Student } from '../types';

interface StudentIconProps {
  student: Student;
  toggleStatus: (id: number) => void;
}

const StudentIcon: React.FC<StudentIconProps> = ({ student, toggleStatus }) => {
  const [isSelected, setIsSelected] = useState<boolean>(student.status === 'Checked In');

  const handleToggleStatus = () => {
    toggleStatus(student.id);
    setIsSelected(prevSelected => !prevSelected);
  };

  return (
    <div
      onClick={handleToggleStatus}
      style={{
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid black',
        margin: '5px',
        backgroundColor: isSelected ? 'lightgreen' : 'lightcoral' // Change background color based on isSelected state
      }}
    >
      <p>{student.name}</p>
      <p>{student.status}</p>
    </div>
  );
};

export default StudentIcon;
