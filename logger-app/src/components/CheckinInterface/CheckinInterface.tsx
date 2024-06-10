import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import WaffleMenu from '../WaffleMenu';
import StudentList from './StudentList/StudentList';
import { Student } from '../../types';
import './CheckinInterface.css';
import CheckedOutStudentList from './CheckedOutStudentList/CheckedOutStudentList';
import * as client from "./client";
import { setStudents, addStudent } from './reducer';
import { ClassState } from '../../store';

const CheckinInterface: React.FC = () => {
  const { classId } = useParams();
  const dispatch = useDispatch();
  // const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    client.findStudentsForClass(classId)
      .then((studs) =>
        dispatch(setStudents(studs.data))
      );
  }, [classId]);

  const students = useSelector((state: ClassState) => 
    state.studentReducer.students);
  
  // const handleAddStudent = (name: string, status: "Checked In" | "Checked Out", location: string, imageUrl: string) => {
  //   const id = Math.max(...students.map(student => student.id), 0) + 1;
  //   const newStudent: Student = { id, name, status,location, time: new Date().toLocaleTimeString(), imageUrl };
  //   setStudents([...students, newStudent]);
  // };

  const toggleStatus = (id: number) => {
    setStudents(students.map(student =>
      student.id === id
        ? { ...student, status: student.status === 'Checked In' ? 'Checked Out' : 'Checked In', time: new Date().toLocaleTimeString() }
        : student
    ));
  };

  const toggleStudent = (id: string) => {
    let newTime = new Date().toLocaleTimeString();
    let newStudent = students.filter(stud => stud._id === id)[0];
    newStudent = { ...newStudent, status: newStudent.status === 'Checked In' ? 'Checked Out' : 'Checked In', time: newTime};
    client.setStudent(id, newStudent).then((status) => {
      dispatch(setStudents(
        students.map(student =>
          student._id === id ? newStudent : student
        )
      ))
    })
  }

  const updateStudentImage = (id: number, imageUrl: string) => {
    setStudents(students.map(student =>
      student.id === id
        ? { ...student, imageUrl }
        : student
    ));
  };

  // Filter students by status
  const checkedInStudents = students.filter(student => student.status === 'Checked In');
  const checkedOutStudents = students.filter(student => student.status === 'Checked Out');

  return (
    <div className="checkin-div">
      <div className="main-content">
        <h1>Student Check-In/Out</h1>
        {/* <WaffleMenu onAddStudent={handleAddStudent} /> */}
        <StudentList students={students} toggleStatus={toggleStudent} updateStudentImage={updateStudentImage} />
      </div>
      <div className="checkout-sidebar">
        <h2>Checked Out Students</h2>
        <CheckedOutStudentList students={checkedOutStudents} toggleStatus={toggleStudent} />
      </div>
    </div>
  );
};

export default CheckinInterface;
