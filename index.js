const express = require('express')

const app = express()

const port = 3000

const unirest = require("unirest");


app.get('/', (req, res) => {
    const apiCall = unirest(
        "GET",
        "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
    );

    apiCall.headers({
        "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
        "x-rapidapi-key": "ba00575e52msha07fd0c94b6f030p14c4f1jsn1b741c25cf74"
    });

    apiCall.end(function (result) {
        if (res.error) throw new Error(result.error);
        console.log(result.body);
        res.send(result.body);
    });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))