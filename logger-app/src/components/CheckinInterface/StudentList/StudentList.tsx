// Import React hooks and CSS for styling
import React, { useRef } from 'react';
import { useState } from 'react';
import './StudentList.css';
// Import the Student type definition
import { Student } from '../../../types';

// Define the props for the StudentList component
interface StudentListProps {
  students: Student[]; // Array of student objects
  toggleStatus: (id: string, location:string) => void; // Function to toggle the check-in status of a student
  updateStudentImage: (id: number, imageUrl: string) => void; // Function to update a student's image
}

// The StudentList component definition
const StudentList: React.FC<StudentListProps> = ({ students, toggleStatus, updateStudentImage }) => {
  // useRef hook to manage references to the file input elements
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  // useState hook to manage the dropdown menu's open/close state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Change useState initialization to track the open dropdown by student _id
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  // Function to programmatically click the file input when the image is clicked
  const handleImageClick = (id: number) => {
    const fileInput = fileInputRefs.current[id];
    if (fileInput) {
      fileInput.click();
    }
  };

  //Function to control the checkout functionality when a student is checked out
  const handleCheckOut = (id: string, location:string) => {
    toggleStatus(id,location); // Call the toggleStatus function to check out the student
  }

  // Modify the toggleDropdown function to accept a student's _id
  const toggleDropdown = (id: string) => {
    if (openDropdownId === id) {
      setOpenDropdownId(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownId(id); // Open the dropdown for the clicked student
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
      {/* Container for the list of checked-in students */}
      <div className="checked-in-container">
        <h3>Checked In</h3>
        {/* List of students who are checked in */}
          <ul className="student-list">
          {students
            .filter(student => student.status === 'Checked In') // Filter to only include students who are checked in
            .map((student, index) => (
              <li key={student.id} className="student-item">
                {/* Individual student item */}
                <div className={`student-box checked-in`}>
                  {/* Display student's name */}
                  <div className="student-name">{student.name}</div>
                  {/* Container for student's image */}
                  <div className="student-image-container">
                    <img
                      src={student.imageUrl || 'https://via.placeholder.com/60'} // Use student's image or a placeholder
                      alt="Student Image"
                      className="student-image"
                      onClick={() => handleImageClick(index)} // On click, trigger file input for image change
                    />
                    {/* Hidden file input for image upload */}
                    <input
                      type="file"
                      accept="image/*"
                      ref={(el) => fileInputRefs.current[index] = el} // Reference to manipulate file input
                      style={{ display: 'none' }}
                      onChange={(e) => handleImageChange(e, student.id)} // Handle image change
                    />
                  </div>
                  {/* Button to check out the student */}
                  <button className="check-out-button" onClick={() => handleCheckOut(student._id, "bathroom")}>Bathroom Request</button>
                  {/* Dropdown for additional actions */}
                  <div className="pass-dropdown">
                    {/* Button to toggle dropdown */}
                    <button className="pass-dropdown-button" onClick={() => toggleDropdown(student._id)}>...</button>
                    {/* Dropdown content, shown if dropdown is open for the current student */}
                    {openDropdownId === student._id && (
                      <div className="pass-dropdown-content">
                        {/* Options within the dropdown */}
                        <button className="pass-dropdown-item" onClick={() => handleCheckOut(student._id, "nurse")}>Nurse</button>
                        <button className="pass-dropdown-item" onClick={() => handleCheckOut(student._id, "office")}>Office</button>
                        <button className="pass-dropdown-item" onClick={() => handleCheckOut(student._id, "locker")}>Locker</button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

// Export the StudentList component for use in other parts of the application
export default StudentList;
