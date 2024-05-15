const axios = require("axios");
module.exports={

    get:async function(dni){
        const {data} = await axios.get("http://localhost:81/user/"+dni);
        return data[0]; 
    }
}