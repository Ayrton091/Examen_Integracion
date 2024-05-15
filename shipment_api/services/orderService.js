const axios = require("axios");
module.exports={

    get:async function(id){
        const {data} = await axios.get("http://localhost:80/data/"+id);
        return data[0]; 
    }
}