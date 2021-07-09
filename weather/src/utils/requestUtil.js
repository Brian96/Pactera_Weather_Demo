import axios from 'axios'

export const getRequest = (url, configs = {}) => {
    return axios.get(url, configs)
        .then((res) => {
            return res.data
        })
}