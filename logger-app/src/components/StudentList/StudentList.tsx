import React, { useRef } from 'react';
import './StudentList.css';
import { Student } from '../../types';

interface StudentListProps {
  students: Student[];
  toggleStatus: (id: number) => void;
  updateStudentImage: (id: number, imageUrl: string) => void;
}

const StudentList: React.FC<StudentListProps> = ({ students, toggleStatus, updateStudentImage }) => {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleImageClick = (id: number) => {
    const fileInput = fileInputRefs.current[id];
    if (fileInput) {
      fileInput.click();
    }
  };

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
      {students.map((student, index) => (
        <li key={student.id} className="student-item">
          <div className={`student-box ${student.status === 'Checked In' ? 'checked-in' : 'checked-out'}`}>
            <div className="student-info">
              <div className="student-image-container">
                <img
                  src={student.imageUrl || 'https://via.placeholder.com/60'}
                  alt="Student Image"
                  className="student-image"
                  onClick={() => handleImageClick(index)} // Call handleImageClick on image click
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={(el) => fileInputRefs.current[index] = el} // Store reference to file input
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e, student.id)}
                />
              </div>
              <span>{student.name}</span>
            </div>
            {student.status === 'Checked In' && (
              <button className="check-out-button" onClick={() => toggleStatus(student.id)}>Check Out</button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
