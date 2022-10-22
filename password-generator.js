var generator = require('generate-password');

const test=()=>{
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    
    // 'uEyMTw32v9'
    console.log(password);
}
module.exports=test