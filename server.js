const express = require('express');
const app = express();
const crypto = require('crypto');


 
module.exports = () => {
    function rand() {
        return (Math.random() * 100).toPrecision(5);
    }

    function randPrecise(seed) {
        return Math.floor(Math.random() * seed);
    }

    function makeStr(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const result = {full_count : Math.floor(Math.random() * 1000),version : Math.floor(Math.random() * 10)};
    for(let i = 0;i< 100;i++) {
        const hash = crypto.createHash('md5').update(i.toString()).digest('hex');
        result[hash] = [
            makeStr(6),rand(),rand(),randPrecise(1000),randPrecise(9999),randPrecise(99999),randPrecise(999),`${makeStr(1)}-${makeStr(5)}`,
            "SU-95",`${makeStr(2)}-${randPrecise(9999-1000) + 1000}`,randPrecise(9999999999),makeStr(3),makeStr(3),"SU1371",0,-2112,"AFL1371",0,"AFL"
        ];
    }


    app.get('/*', function (req, res) {
        Object.keys(result).forEach(key=>{
            result[key][1] = rand();
            result[key][2] = rand();
        })
        setTimeout(()=>{
            res.send(result);
        },Math.floor(Math.random() * 1000))
      
    });
    
    app.listen(3020, function () {
        console.log('mock server on port 3020!');
    });
}
