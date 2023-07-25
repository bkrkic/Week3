module.exports = {
    route:(app,path)=>{
        //app - passes in the express object needed for the route.
        //path - passes in a path object needed to find the file.
        //The path is part of node and needs to be required in the server.js file.
        //If the user requests the root of the site,

        app.get('/login', function(req,res){
            //Find the file to be used as the root of the site.
            let filepath = path.resolve('./www/login.html');
            //Send this file back to the client.
            res.sendFile(filepath);
        });

        app.get('/account', function(req,res){
            //Find the file to be used as the root of the site.
            let filepath = path.resolve('./www/account.html');
            //Send this file back to the client.
            res.sendFile(filepath);
        });

    }
}
