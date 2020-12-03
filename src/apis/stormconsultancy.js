import axios from 'axios'

export default axios.create({
    baseURL: 'http://quotes.stormconsultancy.co.uk'
});