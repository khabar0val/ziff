const http = require("http");
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ziffdb",
  password: "NfnmzyfKhabarova1979#@!"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

http.createServer(function(request, response) {
    if (request.url == "/post") {
        console.log("Post is successful")
    }

    else {
        response.statusCode = 404; // адрес не найден
        response.write("Not Found");
    }

}).listen(3000);