import axios from "axios"

const getUser = (page, result) => {
    axios.get(`https://randomuser.me/api/?page=${page}&results=${result}`)
        .then(response => {
            return response
        }).catch(error => {
            return error.message
        })
}
export default getUser