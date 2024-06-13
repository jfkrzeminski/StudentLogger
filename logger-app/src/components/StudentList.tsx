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
          <li key={index} className={student.status === 'Checked In' ? 'checked-in' : 'checked-out'}>
            <span>{student.name}</span>
            {student.status === 'Checked In' ? (
              <i className="fas fa-check-circle" style={{ marginLeft: '10px' }} />
            ) : (
              <i className="fas fa-times-circle" style={{ marginLeft: '10px' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;


