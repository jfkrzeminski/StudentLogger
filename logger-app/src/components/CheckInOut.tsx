import React, { useState } from 'react';
import { Student } from '../types';

interface CheckInOutProps {
  addStudent: (student: Student) => void;
  studentNames: string[];
}

const CheckInOut: React.FC<CheckInOutProps> = ({ addStudent, studentNames }) => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<'Checked In' | 'Checked Out'>('Checked In');
  const [imageUrl, setImageUrl] = useState<string>(''); // New state for image URL

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCheckInOut = () => {
    if (name) {
      const id = Date.now(); // Generate unique ID
      const newStudent: Student = { id, name, status, time: new Date().toLocaleTimeString(), imageUrl };
      addStudent(newStudent);
      setName('');
      setStatus('Checked In'); // Reset to default value
      setImageUrl(''); // Reset image URL
    }
  };

  return (
    <div>
      <h2>Check In/Out</h2>
      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="">Select Student</option>
        {studentNames.map((studentName, index) => (
          <option key={index} value={studentName}>{studentName}</option>
        ))}
      </select>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={handleCheckInOut}>{status === 'Checked In' ? 'Check In' : 'Check Out'}</button>
    </div>
  );
};

export default CheckInOut;
