// Import React hooks and CSS for styling
import React, { useRef } from 'react';
import { useState } from 'react';
import './StudentList.css';
// Import the Student type definition
import { Student } from '../../../types';

// Define the props for the StudentList component
interface StudentListProps {
  students: Student[]; // Array of student objects
  toggleStatus: (id: string) => void; // Function to toggle the check-in status of a student
  updateStudentImage: (id: number, imageUrl: string) => void; // Function to update a student's image
}

// The StudentList component definition
const StudentList: React.FC<StudentListProps> = ({ students, toggleStatus, updateStudentImage }) => {
  // useRef hook to manage references to the file input elements
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  // useState hook to manage the dropdown menu's open/close state
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  // Function to toggle the dropdown menu's visibility
  const toggleDropdown = (id: string) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownId(id); // Open the dropdown for the clicked student
    }
  };

  // Function to programmatically click the file input when the image is clicked
  const handleImageClick = (id: number) => {
    const fileInput = fileInputRefs.current[id];
    if (fileInput) {
      fileInput.click();
    }
  };

  // Function to handle the file input change event
  // It reads the selected file and updates the student's image URL
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

  // Render the component
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
                  <div className="student-name">{student.name}</div>
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
                      onChange={(event) => handleImageChange(event, student.id)}
                    />
                  </div>
                  <button className="pass-dropdown-button" onClick={() => toggleDropdown(student.id.toString())}>
                    Dropdown
                  </button>
                  {openDropdownId === student.id.toString() && (
                    <div className="pass-dropdown-content show">
                      <a href="#">Action 1</a>
                      <a href="#">Action 2</a>
                      <a href="#">Action 3</a>
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
// Export the StudentList component for use in other parts of the application
export default StudentList;
