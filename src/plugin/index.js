import axios from 'axios';

let url = document.getElementById("url");

function sendInfo(url, date) {
    var date = new Date()

    axios.post('localhost:3000/post', {
        url: url
    });
}

sendInfo()
