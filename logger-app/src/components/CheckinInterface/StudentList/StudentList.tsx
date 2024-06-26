import React, { useRef } from 'react';
import './StudentList.css';
import { Student } from '../../../types';

interface StudentListProps {
  students: Student[];
  toggleStatus: (id: string) => void;
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
    <div className="student-list-container">
      <div className="checked-in-container">
        <h3>Checked In</h3>
        <ul className="student-list">
          {students
            .filter(student => student.status === 'Checked In')
            .map((student, index) => (
              <li key={student.id} className="student-item">
                <div className={`student-box checked-in`}>
                  <div className = "student-name">{student.name}</div>
                    <div className="student-image-container">
                      <img
                        src={student.imageUrl || 'https://via.placeholder.com/60'}
                        alt="Student Image"
                        className="student-image"
                        onClick={() => handleImageClick(index)}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => fileInputRefs.current[index] = el}
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageChange(e, student.id)}
                      />
                      </div>
                  <button className="check-out-button" onClick={() => toggleStatus(student._id)}>Check Out</button>
                  <div className="pass-dropdown">
                    <button className="pass-dropdown-button">...</button>
                    <div className="pass-dropdown-content">
                      <button className="pass-dropdown-item" onClick={() => toggleStatus(student._id)}>Nurse</button>
                      <button className="pass-dropdown-item" onClick={() => toggleStatus(student._id)}>Office</button>
                      <button className="pass-dropdown-item" onClick={() => toggleStatus(student._id)}>Locker</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
