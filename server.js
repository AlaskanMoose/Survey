var express = require("express"),
    app =  express(),
    bp = require('body-parser'),
    path = require("path"),
    session = require("express-session")

app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './node_modules')))
app.use(bp.urlencoded({ extended:true }))
app.use(bp.json())
app.use(session({
  secret: "andy",
  resave: "false",
  saveUnintialized: true
}))
require(path.join(__dirname, './server/config/mongoose.js'))
require(path.join(__dirname, './server/config/routes.js'))(app)
app.listen(8000, function(){
  console.log('listening on port 8000')
})
