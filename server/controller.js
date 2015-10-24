var Contact = require('./models/Contact');

module.exports = function(app) {
	// server routes ===========================================================
	// api ---------------------------------------------------------------------
    app.get('/api/contacts', function(req, res) {
        Contact.find(function(err, contact) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err) {
				res.send(err)
            }
			res.json(contact); // return all todos in JSON format
		});
    });
    
    app.get('/api/contacts/:contact_id', function(req, res) {
        
        Contact.findById(req.params.contact_id, function(err, contact) {
            if (err) {
                res.send(err);
            }            
            res.json(contact);
        });
    });
    
    // create
    app.post('/api/contacts', function(req, res) {
        // create a todo, information comes from AJAX request from Angular
		Contact.create({
			name: {
                title: req.body.name.title,
                first: req.body.name.first,
                last: req.body.name.last
            },
            email: req.body.email,
            phone: {
                home: req.body.phone.home,
                work: req.body.phone.work,
                mobile: req.body.phone.mobile,
                other: req.body.phone.other
            },
            image: req.body.image,
            occupation: req.body.occupation,
            relationship: req.body.relationship 
		}, function(err, contact) {
			if (err) {
				res.send(err);
            }
            res.json(contact);
		});
    });
    
    app.put('/api/contacts/:contact_id', function(req, res) {
        console.log(req.body);
        Contact.findByIdAndUpdate(req.params.contact_id, req.body, function (err, contact) {
            console.log(req.body);
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    });

    // delete
    app.delete('/api/contacts/:contact_id', function(req, res) {
        Contact.findByIdAndRemove(req.params.contact_id, function (err, contact) {
            if(err) { 
                res.send(err);
            }
            res.json(contact);
        });
    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./client/index.html');
	});

};