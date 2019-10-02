import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-af867.firebaseio.com/'
});

export default instance;