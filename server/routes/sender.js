'use strict';
const nodemailer = require('nodemailer');
const config = require('../config');

module.exports = (router) => {

    router.post('/send', (req, res) => {

        if (!req.body.options) req.body.options = '';
        if (!req.body.calc) req.body.calc = '';

        // console.log(req.body);
        const output = `
            <div>
                <h4>${req.body.id}</h4>
                <p>
                    <strong>Name:</strong>
                    <span>${req.body.name}</span>
                </p>
                
                <p>
                    <strong>Phone:</strong>
                    <span>${req.body.phone}</span>
                </p>
                
                <p>
                    <strong>Email:</strong>
                    <span>${req.body.email}</span>
                </p>
                
                <p>
                    <strong>Message:</strong>
                    <span>${req.body.message}</span>
                </p>
               
                <p>
                    <strong>Options:</strong>
                    <span>Name: ${req.body.options.goodName}</span>
                    <span>Size: ${req.body.options.size}</span>
                    <span>Price: ${req.body.options.price}</span>
                </p>
                <p>
                    <strong>Presents:</strong>
                    <span>${req.body.presents}</span>
                </p>
               <p>
                    <strong>ValueCalc:</strong>
                    <span>${req.body.calc.summ}</span>
                    <span>Types: ${req.body.calc.types}</span>
                    <span>Diagonal: ${req.body.calc.diagonal}</span>
                    <span>Touch: ${req.body.calc.touch}</span>
                    <span>Options: ${req.body.calc.options}</span>
                </p>
            </div>
        `;

        const smtpTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: config.authEmail.user,
                pass: config.authEmail.pass
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const maillist = config.emails;

        const msg = {
            from: "******", // sender address
            subject: "Hello ✔", // Subject line
            text: "Hello This is an auto generated Email for testing  from node please ignore it  ✔", // plaintext body
            cc: "*******",
            html: output // html body
        };


        maillist.forEach(function (to, i, array) {
            msg.to = to;

            smtpTransport.sendMail(msg, function (err) {
                if (err) {
                    console.log('Sending to ' + to + ' failed: ' + err);
                    return;
                } else {
                    console.log('Sent to ' + to);
                    res.json({status: 'success', message: 'Сообщение отправлено'});
                }

                if (i === maillist.length - 1) {
                    msg.transport.close();
                }
            });
        });

    });

    return router;
};