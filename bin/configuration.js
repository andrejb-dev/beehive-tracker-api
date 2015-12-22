var express = require("express"),
    //customer = express(),
    //admin = express(),
    path = require("path"),
    application_root = path.resolve("."),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override');

module.exports.applyConfiguration = function (server) {
    console.log('Setting basic startup configuration...');

    //server.use('/api', customer);
    //customer.use('/admin', admin);
    //server.use('/api/admin', admin);
    var publicPath = path.join(application_root, "public");

    server.set('view engine', 'jade');
    server.set('views', publicPath);
    server.set('styles', path.join(publicPath, "stylesheets"));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));
    server.use(methodOverride());
    server.use('/', express.static(publicPath));
    server.use(errorHandler({ dumpExceptions: true, showStack: true }));
    

    server.get("/", function (req, res) {
      res.render("index",{ title : 'title of site' });
    });
}

//  Set the environment variables
module.exports.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
};

module.exports.ipaddress = ipaddress;