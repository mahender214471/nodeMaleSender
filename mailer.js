// dependency
const nodemailer = require("nodemailer");

class mailer {
    // CONSTRUCTER FOR GET GLOBEL VARIABLES
    constructor( host , port , username , password , secure){
        // create reusable transporter object using the default SMTP transport
        this.transporter = nodemailer.createTransport({
             host: host,
             port: port,
             secure, // true for 465, false for other ports
             auth: {
               user: username, // generated ethereal user
               pass: password  , // generated ethereal password
             },
        });
    }

    // METHOD FOR SEND MAIL 
    send ( to , subject , html , callback ) {
        const mailOptions = {
            from:this.username , to , subject , html 
        };

        this.transporter.sendMail(mailOptions , callback );
    }
}
module.exports = mailer ;