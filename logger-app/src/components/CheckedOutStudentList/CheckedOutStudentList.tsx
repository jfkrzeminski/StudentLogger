import React, { useRef } from 'react';
import './CheckedOutStudentList.css';
import { Student } from '../../types';

interface CheckedOutStudentListProps {
  students: Student[];
  toggleStatus: (id: number) => void;
}

const CheckedOutStudentList: React.FC<CheckedOutStudentListProps> = ({ students, toggleStatus}) => {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  return (
    <div className="student-list-container">
      <div className="checked-out-container">
        <h3>Checked Out</h3>
        <ul className="student-list">
          {students
            .filter(student => student.status === 'Checked Out')
            .map((student, index) => (
              <li key={student.id} className="student-item">
                <div className={`checked-out-student-box`}>
                  <div className="checked-out-student-info">
                    <div className="checked-out-student-image-container">
                      <img
                        src={student.imageUrl || 'https://via.placeholder.com/60'}
                        alt="Student Image"
                        className="student-image"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => fileInputRefs.current[index] = el}
                        style={{ display: 'none' }}
                      />
                    </div>
                    <span>{student.name}</span>
                  </div>
                  <button className="check-in-button" onClick={() => toggleStatus(student.id)}>Check In</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckedOutStudentList;
