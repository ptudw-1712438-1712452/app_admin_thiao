var Product = require('../models/product');

module.exports.showProductsBoy = function(req, res, next){
    Product.find({title: 'trang phục nam'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}

module.exports.getUpdateProduct = function(req, res, next){
    var productID = req.params.id;
    Product.find({_id: productID}, function(err, productDetail){
        res.render('administration/editProduct', {productDetail: productDetail});
    });
}

module.exports.postUpdateProduct = function(req, res, next){
    var productID = req.params.id;
    Product.findById(productID, function(err, doc){
        if(err){
            console.error('error, no entry found');
        }
        doc.title = req.body.title;
        doc.description = req.body.description;
        doc.Characteristics = req.body.Characteristics;
        doc.promotion = req.body.promotion;
        doc.price = req.body.price;
        doc.save();
    })
    res.redirect('/products/productsBoy');
}
module.exports.getInsertProduct = function(req, res, next){
    res.render('administration/insertProduct');
}

module.exports.postInsertProduct = function(req, res, next){
    var product = {
        imagePath_1: req.body.imagePath_1,
        imagePath_2: req.body.imagePath_2,
        imagePath_3: req.body.imagePath_3,
        title: req.body.title,
        description: req.body.description,
        Characteristics: req.body.Characteristics,
        promotion: req.body.promotion,
        price: req.body.price
    };
    var dataProduct = new Product(product);
    dataProduct.save();
    res.redirect('/products/productsBoy')
}
module.exports.deleteProduct = function(req, res, next){
    var productID = req.params.id;
    Product.remove(productID).exec();
    redirect('/products/productsBoy')
}
module.exports.showProductsBoy1 = function(req, res, next){
    Product.find({title: 'trang sức nam'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}
module.exports.showProductsBoy2 = function(req, res, next){
    Product.find({title: 'giày nam'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}
module.exports.showProductsGirl = function(req, res, next){
    Product.find({title: 'trang phục nữ'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}
module.exports.showProductsGirl1 = function(req, res, next){
    Product.find({title: 'trang sức nữ'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}
module.exports.showProductsGirl2 = function(req, res, next){
    Product.find({title: 'giày nữ'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}
module.exports.showProductsSport1 = function(req, res, next){
    Product.find({title: 'trang phục thể thao mùa hè'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}
module.exports.showProductsSport2 = function(req, res, next){
    Product.find({title: 'trang phục thể thao mùa đông'}, function(err, products){
        var productChunks = [];
        var chunkSize = 3;     
        for (var i=0; i< products.length ; i += chunkSize){
          productChunks.push(products.slice(i, i+chunkSize));
        }  
        var page = parseInt(req.query.page) || 1;
        var perPage= 6;
        var start = (page - 1)*perPage;
        var end = page * perPage; 
        res.render('administration/products', {products: productChunks.slice(start, end)});
    });
}

module.exports.search = function(req, res, next){
    const { term }= req.query;
      
     Product.find({  "description": { $regex: '.*' + term + '.*'}  },function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }   
        var page = parseInt(req.query.page) || 1;
        var perPage= 2;
        var start = (page - 1)*perPage;
        var end = page * perPage;            
       res.render('administration/products', { title: 'Shopping Cart', products: productChunks.slice(start, end)  });
      });  
}