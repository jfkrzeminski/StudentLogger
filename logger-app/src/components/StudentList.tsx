import React from 'react';
import { Student } from '../types';
import '../styles.css'; // Import the CSS file

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
        updateStudentImage(id, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
        {students.map((student, index) => (
          <li key={index}>
            <div
              className={`student-box ${student.status === 'Checked In' ? 'checked-in' : 'checked-out'}`}
              onClick={() => toggleStatus(student.id)}
            >
              <img src={student.imageUrl} alt={student.name} className="student-image" />
              <span>{student.name}</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(student.id, e)}
                style={{ display: 'none' }} // Hide the input
                id={`file-input-${student.id}`}
              />
              <label htmlFor={`file-input-${student.id}`} className="image-upload-label">
                &#x1F4F7; {/* Camera emoji as an upload icon */}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
