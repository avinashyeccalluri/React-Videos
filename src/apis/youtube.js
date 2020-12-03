import axios from 'axios';

const KEY = 'AIzaSyAZgiO6VC97T7IEe4M-mj83S7qurqHjc8U';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });

