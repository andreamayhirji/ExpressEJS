'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        //res.render is used to display the appropriate pages.
        res.render('pages/index');
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
};