import React from 'react';
import { Student } from '../types'; // Adjust the path to where your types file is located
import './CheckedInModal.css';

interface CheckedInModalProps {
  students: Student[];
  onClose: () => void;
}

const CheckedInModal: React.FC<CheckedInModalProps> = ({ students, onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <h2>Checked In Students</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <img src={student.imageUrl} alt={student.name} className="student-image" />
              <span>{student.name}</span>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CheckedInModal;
