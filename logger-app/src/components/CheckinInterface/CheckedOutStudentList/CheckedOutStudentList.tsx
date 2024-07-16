import React, { useRef, useState } from 'react';
import './CheckedOutStudentList.css';
import { Student } from '../../../types';
//import Stopwatch from '../../Stopwatch'; 

interface CheckedOutStudentListProps {
  students: Student[];
  toggleStatus: (id: string, location:string ) => void; // Updated to potentially accept a new image URL
}

const CheckedOutStudentList: React.FC<CheckedOutStudentListProps> = ({ students, toggleStatus }) => {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleCheckIn = (id: string) => {
    toggleStatus(id, "classroom");
  };

  return (
    <div className="student-list-container">
      <div className="checked-out-container">
        <h3>Checked Out</h3>
        <ul className="student-list">
          {students.filter(student => student.status === 'Checked Out').map((student, index) => (
            <li key={student.id} className="student-item">
              <div className="checked-out-student-box">
                <div className="checked-out-student-info">
                  <div className="checked-out-student-image-container" onClick={() => fileInputRefs.current[index]?.click()}>
                    <img
                      src={student.imageUrl || 'https://via.placeholder.com/60'}
                      alt="Student Image"
                      className="student-image"
                    />
                  </div>
                  <span>{student.name}</span>
                </div>
                <button className="check-in-button" onClick={() => handleCheckIn(student._id)}>Check In</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckedOutStudentList;
