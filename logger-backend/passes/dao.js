import model from "./model.js";
export const createPass = (pass) => {
    return model.create(pass);
};
export const deletePassById = (pId) => model.findByIdAndDelete(pId);