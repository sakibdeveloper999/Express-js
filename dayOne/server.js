const https =  require('https');

const port = 3000;

const requestHandler =(req, res)=>{
    res.end('Hello from Node.js server!');
}

const server = https.createServer(requestHandler);
server.listen(port, (err)=>{
    if(err){
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});