import React, { useState } from 'react';
import { Student } from '../types';

interface CheckInOutProps {
  addStudent: (student: Student) => void;
  studentNames: string[];
}

const CheckInOut: React.FC<CheckInOutProps> = ({ addStudent, studentNames }) => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<'Checked In' | 'Checked Out'>('Checked In');

  const handleCheckInOut = () => {
    if (name && status) {
      // Generate a unique ID for the student
      const id = Date.now();
      const newStudent: Student = { id, name, status, time: new Date().toLocaleTimeString() };
      addStudent(newStudent);
      setName('');
      setStatus('Checked In'); // Reset to default value
    }
  };

  return (
    <div>
      <h2>Check In/Out</h2>
      <select value={name} onChange={(e) => setName(e.target.value)}>
        <option value="">Select Student</option>
        {studentNames.map((student, index) => (
          <option key={index} value={student}>
            {student}
          </option>
        ))}
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value as 'Checked In' | 'Checked Out')}>
        <option value="">Select Status</option>
        <option value="Checked In">Check In</option>
        <option value="Checked Out">Check Out</option>
      </select>
      <button onClick={handleCheckInOut}>Submit</button>
    </div>
  );
};

export default CheckInOut;


