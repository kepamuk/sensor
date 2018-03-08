'use strict';
const nodemailer = require('nodemailer');

module.exports = (router) => {

    router.post('/send', (req, res) => {

        if (!req.body.options) req.body.options = '';

        const output = `
            <div>
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
            </div>
        `;

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'kepamuk34@gmail.com',
                pass: 'qqq123ewfqqq'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: 'kepamuk34@gmail.com',
            to: 'kepamuk34@gmail.com',
            subject: 'Test',
            text: 'Hello World!',
            html: output
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
            res.json({status: 'success', message: 'Сообщение отправлено'});
        });

    });

    return router;
};