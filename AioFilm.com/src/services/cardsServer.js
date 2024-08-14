import axios from "axios";

const SERVER_URL = "http://localhost:9000";


export const getAllCards = () =>{
    const url = `${SERVER_URL}/card`
    return axios.get(url)
}

export const getCard = (cardId) =>{
    const url = `${SERVER_URL}/card/${cardId}`
    return axios.get(url)
}