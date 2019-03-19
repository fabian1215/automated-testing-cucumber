'use strict';
var express = require('express');
var Contact = require('../models/contact');
var router = express.Router();
router.route('/')
    .get(function(req, res) {
        Contact
            .fetchAll()
            .then(function(contacts) {
                res.json({ contacts});
            });
    })


    //metodos CRUD
    .post(function(req, res) {
        new Contact({
                id: req.body.id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
            })
            .save(null, {
                method: 'insert'
            })
            .then(function(saved) {
                res.json({saved});
            });
    });

router.route('/:id')
    .put(function(req, res) {
        Contact
            .where('id', req.params.id)
            .fetch()
            .then(function(contact) {
                contact
                    .save({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        emailAddress: req.body.emailAddress,
                    })
                    .then(function(saved) {
                        res.json({saved });
                    });
            });
    })
    .delete(function(req, res) {
        Contact
            .where('id', req.params.id)
            .destroy()
            .then(function(destroyed) {
                res.json({destroyed});
            });
    });

module.exports = router;