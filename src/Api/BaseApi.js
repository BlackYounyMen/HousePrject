import axios from 'axios';

axios.defaults.baseURL = "https://localhost:5001/api/"


export function Login() {
    var token = {
        params: {
            account: "admin",
            password: "123456",
        },
    };
    var backdata = {};
    axios.get('/Login/UserLogin', token).then(res => {
        console.log(res.data);
        backdata = res.data;
        return backdata;
    });
}