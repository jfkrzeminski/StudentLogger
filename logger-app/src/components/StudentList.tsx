import React from 'react';
import { Student } from '../types';
import './StudentList.css';

interface StudentListProps {
  students: Student[];
  toggleStatus: (id: number) => void;
  updateStudentImage: (id: number, imageUrl: string) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, toggleStatus, updateStudentImage }) => {
  const handleImageChange = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updateStudentImage(id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ul className="student-list">
      {students.map(student => (
        <li key={student.id} className="student-item">
          <div className={`student-box ${student.status === 'Checked In' ? 'checked-in' : 'checked-out'}`}>
            <img src={student.imageUrl} alt={student.name} className="student-image" />
            <span>{student.name}</span>
            <button onClick={() => toggleStatus(student.id)}>
              {student.status === 'Checked In' ? 'Check Out' : 'Check In'}
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(student.id, event)}
              style={{ display: 'none' }}
              id={`file-input-${student.id}`}
            />
            <label htmlFor={`file-input-${student.id}`} className="image-upload-label">📷</label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
