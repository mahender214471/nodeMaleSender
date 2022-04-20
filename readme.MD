# Mail sender

A nodejs package for send mail from nodejs server easly .

## Installation

```
npm install nodemailer
```
```
yarn install nodemailer
```
## Usage

```javascript
// REQUIRE THE PACKAGE
const mailSender = require('nodemailer');
// CONFIG
const port = 587 ;
const username = 'your smtp server username ' ;
const password = 'your smtp server password ' ;
const secure   = false ; 
const sender =  mailSender(host ,port ,username , password , secure ) ;
// SEND MAIL 
try {
     const to      = 'test@mailSender.com' ;
     const subject = 'test mail send from node server' ;
     const html    = '<h1>test mail sender<h1/>'
     const info = await  sender.send( to , subject , html ) ;
     console.log('info ========>' , info ) ; 
}
catch ( err ) {
    console.log('err ========>' , err ) ; 
}
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
