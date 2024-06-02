import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const STUDENTS_API = `${API_BASE}/api/students`;

const api = axios.create();

export const createStudent = async (student: any) => {
  // console.log(student);
  const response = api.post(
    STUDENTS_API,
    student
  );
  return response;
};

export const findStudentsForClass = async (classId: any) => {
  const response = api.get(`${STUDENTS_API}/${classId}`);
  console.log(response);
  return response;
};

