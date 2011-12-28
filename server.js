var express = require("express"),
    app = express.createServer();
app.use(express.static(__dirname));

//setup the errors
app.error(function(err, req, res, next){
    if (err instanceof NotFound) {
		res.sendfile('404.html');
    } else {
		res.sendfile(__dirname + '/500.html');
    }
});

app.listen(12952);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('/*', function(req, res){
    throw new NotFound;
});

function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}