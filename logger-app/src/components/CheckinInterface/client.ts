import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const STUDENTS_API = `${API_BASE}/api/students`;
const CLASSES_API = `${API_BASE}/api/classes`;

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
  const response = api.get(`${CLASSES_API}/${classId}`);
  console.log(response);
  return response;
};

export const setStudent = async (studentId: string, student: any) => {
  const response = api.put(`${STUDENTS_API}/${studentId}`, student);
  console.log(response);
  return response;
}

export const checkoutStudent = async (studentId: string) => {
  const response = api.get(`${STUDENTS_API}/${studentId}/co`);
  console.log(response);
  return response;
}

export const checkinStudent = async (studentId: string) => {
  const response = api.get(`${STUDENTS_API}/${studentId}/ci`);
  console.log(response);
  return response;
}

