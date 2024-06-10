import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [{ }],
};


const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students = [
        ...state.students, action.payload
      ];
    },
    // deleteQuiz: (state, action) => {
    //   state.students = state.students.filter(
    //     (student) => student._id !== action.payload
    //   );
    // },
  },
});


export const { addStudent, setStudents } = studentsSlice.actions;
export default studentsSlice.reducer;