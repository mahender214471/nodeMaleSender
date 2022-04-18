module.exports = ( host , port , username ,password , secure ) => {
    const mail = require('./mailer')
    const mailer = new mail ( host , port , username ,password , secure ) ;
    return mailer.send ;
}
