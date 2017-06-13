const http = require('http');
const fs = require('fs');

function send404Response(response) {
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404: File not found");
  response.end();
}

function onRequest(request, response) {
  if(request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {'Content-Type': 'application/json'});

    const dataObj = [{
                        "title": "setOne",
                        "length": 70
                      },
                      {
                        "title": "setTwo",
                        "length": 30
                      }];

    response.end(JSON.stringify(dataObj));
    // fs.createReadStream('./data.json').pipe(response);
  } else {
    send404Response(response);
  }
};

http.createServer(onRequest).listen(9000);

console.log('Server is listening on port 9000');
