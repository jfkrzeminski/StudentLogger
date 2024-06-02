// src/components/studentsData.ts
import { Student } from '../types';

export const initialStudents: Student[] = [
  { id: 1, name: 'Student 1', status: 'Checked In', time: new Date().toLocaleTimeString(), imageUrl: 'https://via.placeholder.com/40' },
  { id: 2, name: 'Student 2', status: 'Checked In', time: new Date().toLocaleTimeString(), imageUrl: 'https://via.placeholder.com/40' },
  // Add more students as needed
];

export default initialStudents;

