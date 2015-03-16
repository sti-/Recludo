/**
 * Created by STI on 3/16/2015.
 */
var express = require('express'),
    mongoose = require('mongoose');

var uristring = process.env.MONGOLAB_URI ||
    'mongodb://localhost/test';

var app = express();

mongoose.connect(uristring);

app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 5000);