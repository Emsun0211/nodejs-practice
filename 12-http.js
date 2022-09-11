const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url === '/about') {
        res.end('Here is a brief history')
    } else {
        res.end(
            `<h1>Opps</h1>
            <p>We cant find the page you are looking for</p>
            <a href='/'>Back to home</a>`
        )
    }

})

server.listen(5000);