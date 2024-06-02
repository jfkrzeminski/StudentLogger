import React from 'react';
import { Student } from '../../../types';

interface CheckedInModalProps {
  students: Student[];
}

const CheckedInModal: React.FC<CheckedInModalProps> = ({ students }) => {
  return (
    <div>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <div>
              <span>{student.name}</span>
              <img src={student.imageUrl} alt={student.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckedInModal;
