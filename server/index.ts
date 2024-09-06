// @ts-nocheck
import http from 'http'
import fs from 'fs';
import path from 'path';

// посмотреть как можно узнавать какое устройство
http.createServer(function (req, res) {

    if (req.method === 'POST' && req.url?.includes('log')) {
        let body: any = [];
        req
            .on('data', (chunk: any) => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                console.log(body);
            });

        return res.end()
    }

    if (req.method === 'GET' && (req.url?.includes('page') || req.url === '/')) {
        const page = fs.readFileSync(path.resolve(__dirname, '..', 'index.html')).toString()

        return res.write(page)
    }



    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080)