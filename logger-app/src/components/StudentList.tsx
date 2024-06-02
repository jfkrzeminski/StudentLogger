import React from 'react';
import './StudentList.css';
import { Student } from '../types';

interface StudentListProps {
  students: Student[];
  toggleStatus: (id: number) => void;
  updateStudentImage: (id: number, imageUrl: string) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, toggleStatus, updateStudentImage }) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          updateStudentImage(id, e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <ul className="student-list">
      {students.map(student => (
        <li key={student.id} className="student-item">
          <div className={`student-box ${student.status === 'Checked In' ? 'checked-in' : 'checked-out'}`} onClick={() => toggleStatus(student.id)}>
            <img src={student.imageUrl || 'https://via.placeholder.com/60'} alt={student.name} className="student-image" />
            <span>{student.name}</span>
            <input type="file" accept="image/*" id={`file-input-${student.id}`} style={{ display: 'none' }} onChange={(e) => handleImageChange(e, student.id)} />
            <label htmlFor={`file-input-${student.id}`} className="image-upload-label">📷</label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
