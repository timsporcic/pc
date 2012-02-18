var data = require('../data').data,
    upcoming = require('../data').upcoming,
    _ = require('underscore');


/*
 * GET home page.
 */

exports.index = function(req, res){

  res.render('index', {layout: 'mobile' });
};

exports.approvals = function(req,res) {

	res.render('approvals', { changes: data, layout: 'mobile' });

}

exports.upcoming = function(req,res) {

	res.render('upcoming', {upcoming: upcoming, layout: 'mobile'});
}

exports.change = function(req, res) {

	var item = data[ parseInt(req.params.id) - 1 ];

	if(item['approved']) {
		res.redirect('/');
		return;
	}

	res.render('change', {item: item, layout: 'mobile'});
};

exports.update = function(req,res) {

	var item = data[ parseInt(req.params.id) - 1 ];

	item['approved'] = true;

	console.log(JSON.stringify(item));

	res.redirect('/approvals');
};