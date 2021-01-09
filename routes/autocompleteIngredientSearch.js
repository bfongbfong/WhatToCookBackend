const https = require('https');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    https.get(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${process.env.API_KEY}&query=chick&number=7`, (resp) => {
        console.log('starting autocomplete search route');
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            // console.log(chunk);
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(data);
            res.json(data);
            // console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    // const options = {
    //     hostname: 'api.spoonacular.com',
    //     path: `/food/ingredients/autocomplete?apiKey=${process.env.API_KEY}&query=chick&number=7`,
    //     method: 'GET'
    // }
    
    // const req = https.request(options, res => {
    //     console.log(`statusCode: ${res.statusCode}`);
    
    //     res.on('data', d => {
    //         process.stdout.write(d);
    //     })
    // })
    
    // req.on('error', error => {
    //     console.error(error);
    // });
    
    // req.end()
});

module.exports = router;

