import axios from 'axios';

let url = document.getElementById("url");

function sendInfo(url) {
    axios.post('/post', {
        url: url
    });
}

sendInfo()