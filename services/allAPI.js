import { commonApi } from "./commonAPI"
import { SERVER_URL } from "./server"





//register student

 export const registerApi=async (reqBody)=>{
    return await commonApi("POST",`${SERVER_URL}/register`,reqBody)
}
//get all projects
export const getAllStudentsApi=async()=>{
    return await commonApi("GET",`${SERVER_URL}/student-list`,{})
}