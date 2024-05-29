import React, { useState } from 'react';
import { Student } from '../types';

interface CheckInOutProps {
  addStudent: (student: Student) => void;
  studentNames: string[];
}

const CheckInOut: React.FC<CheckInOutProps> = ({ addStudent, studentNames }) => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleCheckInOut = () => {
    if (name && status) {
      const newStudent: Student = { name, status, time: new Date().toLocaleTimeString() };
      addStudent(newStudent);
      setName('');
      setStatus('');
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
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select Status</option>
        <option value="Check In">Check In</option>
        <option value="Check Out">Check Out</option>
      </select>
      <button onClick={handleCheckInOut}>Submit</button>
    </div>
  );
}

export default CheckInOut;
