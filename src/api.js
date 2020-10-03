const URL = `https://newsapi.org/v2/everything?`
const API_KEY = 'apiKey=' + process.env.REACT_APP_NEWS_API_KEY

const api = {
    get: async (params) => {
        const response = await fetch(URL + API_KEY + "&" + params)
        const data = await response.json()
        return data
    },
    post: async (params) => {

    },
    delete: async (params) => {

    },
    update: async (params) => {

    }

}

export default api;