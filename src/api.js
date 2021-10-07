import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyDNe5UqWRa_mHMv6umDNThnZc_H3c43RFE',
   },
})

export default request
