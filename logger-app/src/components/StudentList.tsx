// StudentList.tsx
import React from 'react';
import { Student } from '../types';

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span>{student.name}</span>
            {student.status === 'Checked In' ? (
              <i className="fas fa-check-circle checked-in-icon" style={{ marginLeft: '10px' }} />
            ) : (
              <i className="fas fa-times-circle checked-out-icon" style={{ marginLeft: '10px' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;

