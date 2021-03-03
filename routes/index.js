var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.send('Welcome to About us');
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});



router.post('/contact', function(req, res, next) {
   console.log(req.files.file123);
  
   var filedata = req.files.file123;
   var filename = filedata.name;
   var filetype = filedata.mimetype;

   if(filetype == "image/png")
   {
        filedata.mv("upload/"+filename,function(err){
          if(err)
          {
            return res.status(500).send(err);

          }else{
            res.send('File uploaded!');
          }
        });
    }else{
      res.send(' Only JPG Files Upload');
    }

    "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "asdasd", // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);



});

module.exports = router;
