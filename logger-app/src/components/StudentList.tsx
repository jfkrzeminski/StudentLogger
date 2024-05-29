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
            {student.name} - {student.status} at {student.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
