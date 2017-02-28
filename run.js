/**
 * Created by Magic on 2017/2/28.
 */
var express = require('express');
var app = express();
app.use("/",express.static(__dirname));

app.listen(8008);