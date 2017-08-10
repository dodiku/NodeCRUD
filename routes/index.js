const express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.render('index', {title: "root page"})
})

router.get('/new', function(req, res, next){
    res.render('new', {title: "new page"})
})

module.exports = router