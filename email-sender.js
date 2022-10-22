
var nodemailer = require('nodemailer');

let PORT = process.env.PORT || 3000;

var test2=()=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bouazizrahma5@gmail.com',
          pass: 'lzwmsyfyglimqgzs'
        }
      });
      
      var mailOptions = {
        from: 'bouazizrahma5@gmail.com',
        to: 'bouazizrahma5@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
}

module.exports=test2