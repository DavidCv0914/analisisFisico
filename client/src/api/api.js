import axios from "axios";

let url = "http://localhost:4000";

export const infoMuestra = async(values) =>
    await axios.post(`${url}/infoMuestra`, values) 
