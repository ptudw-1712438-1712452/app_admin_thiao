var User = require('../models/user');
var Order = require('../models/order');

module.exports.listUser = function(req, res, next){
    User.find(function(err, Users){
        var page = parseInt(req.query.page) || 1;
        var perPage= 5;
        var start = (page - 1)*perPage;
        var end = page * perPage;
        res.render('administration/listUser', {Users: Users.slice(start, end)});
    });
}

module.exports.userDetail = function(req, res, next){
    var userID = req.params.id;
    User.find({_id: userID}, function(err, user){
        res.render('administration/userDetail', {user: user});
    })
}

module.exports.showListOrder = function(req, res, next){
    Order.find(function(err, orders){
        var page = parseInt(req.query.page) || 1;
        var perPage= 5;
        var start = (page - 1)*perPage;
        var end = page * perPage;
        res.render('administration/listOrder', {orders: orders.slice(start, end)});
    })
}

module.exports.orderDetail = function(req, res, next){
    var orderID = req.params.id;
    Order.find({_id: orderID}, function(err, order){
        res.render('administration/orderDetail', {order: order});
    });
}
module.exports.updateStatus = function(req, res, next){
    var orderID = req.params.id;
        Order.findById(orderID, function(err, doc){
            if(err){
                console.error('error, no entry found');
            }
            doc.status = req.body.newStatus;
            doc.save();
        })
        res.redirect('/administration/listOrder');

}
