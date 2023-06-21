let bcrypt = require("bcrypt")


async function getsalt() {
   return console.log(await bcrypt.genSaltSync(10));    
}
getsalt()