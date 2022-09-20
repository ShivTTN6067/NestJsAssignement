import axios from "axios";

export const userLoginDB = async (payload) => {
    try {
        const res = await axios.post('http://localhost:3000/login', payload,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                }
            }
        )
        return res.data;
    }catch (err){
        return err;
    }
}

export const userSignUpDB = async (payload) => {
    try {
        const res = await axios.post('http://localhost:3000/createUser', payload,
            {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json",
                }
            }
        )
        return res.data;
    }catch (err){
        return err;
    }
}