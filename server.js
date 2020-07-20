const express = require('express');
const app = express();

module.exports = () => {
    app.get('/*', function (req, res) {
        setTimeout(()=>{
            res.send({
                "full_count":8341,"version":4,"24fcc0b5":["",56.584,33.629,281,38993,428,"2151","T-MLAT1","H25B","",1595241774,"","","",0,0,"H25B",0,""]
                ,"24fca869":["400155",56.584,34.861,327,36000,455,"2420","F-UUDD1","A319","VP-BWG",1595241774,"ROV","LED","SU6372",0,0,"SDM6372",0,"SDM"]
                ,"24fcb3a4":["155BB9",55.579,36.397,320,18400,355,"1542","F-UUEM2","SU95","RA-89017",1595241774,"EGO","SVO","SU1371",0,-2112,"AFL1371",0,"AFL"]
                ,"24fcbdfb":["",55.960,36.656,267,14775,306,"1521","F-UUEM2","F900","",1595241774,"","","",0,2688,"F900",0,""]
                ,"24fc450d":["",55.562,37.038,139,7225,258,"0260","F-UUEE8","GLEX","",1595241773,"","","",0,-1920,"GLEX",0,""]
                ,"24fcc01d":["424476",55.880,37.059,215,7775,259,"1573","F-UUDD1","B77W","VQ-BFK",1595241774,"SVO","TLV","SU508",0,768,"AFL508",0,"AFL"]
                ,"24fc993e":["42436B",55.590,37.256,253,0,21,"2451","T-UUWW76","B738","VP-BPL",1595241769,"AER","VKO","DP120",1,0,"PBD120",0,"PBD"]
                ,"24fc99ec":["42434D",55.971,37.387,345,0,26,"1044","F-UUEE5","A321","VP-BFX",1595241765,"AAQ","SVO","SU1547",1,0,"AFL1547",0,"AFL"]
                ,"24fca60a":["424398",55.968,37.407,225,0,26,"2427","F-UUEE1","A320","VP-BII",1595241750,"ROV","SVO","SU1163",1,0,"AFL1163",0,"AFL"]
                ,"24fcc76e":["42443F",55.978,37.416,165,0,15,"1507","F-UUEE5","A321","VQ-BTT",1595241769,"SVO","KGD","SU1004",1,0,"AFL1004",0,"AFL"]
                ,"24fcbeeb":["424401",55.979,37.417,89,0,0,"6655","F-UUEE1","B77W","VQ-BQM",1595241772,"SVO","","SU1731",1,0,"AFL1731",0,"AFL"]
                ,"24fc9c41":["424335",55.978,37.421,345,0,32,"1052","F-UUEE5","A321","VP-BES",1595241771,"GDZ","SVO","SU1153",1,0,"AFL1153",0,"AFL"]
                ,"24fc2207":["4CA9B6",55.982,37.428,192,0,0,"0000","F-UUEE1","B744","EI-XLM",1595241769,"KHV","SVO","SU6288",1,0,"SDM6288",0,"SDM"]
                ,"24fcc128":["155BC0",55.974,37.431,255,0,105,"2126","F-UUEE5","SU95","RA-89024",1595241755,"SVO","IGT","SU1078",0,0,"AFL1078",0,"AFL"]
                ,"24fc336c":["4CAF84",55.982,37.431,271,0,0,"2000","F-UUEE5","B77W","EI-GES",1595241771,"VVO","SVO","SU6282",1,0,"SDM6282",0,"SDM"]
                ,"24fcc47d":["424350",55.980,37.440,163,0,17,"2705","F-UUEE5","A321","VP-BFQ",1595241762,"SVO","SIP","SU1628",1,0,"AFL1628",0,"AFL"]
                ,"24fcc3df":["424432",55.977,37.442,89,0,0,"1503","F-UUEE5","B738","VQ-BHW",1595241770,"SVO","LED","SU20",1,0,"AFL020",0,"AFL"]
                ,"24fc9e27":["",55.593,37.458,268,2466,151,"2453","T-MLAT1","E35L","",1595241714,"","","",0,-512,"E35L",0,""]
                ,"24fc8dee":["",56.233,37.471,110,5825,250,"4527","F-UUEM2","B737","",1595241774,"","","",0,-1152,"B737",0,""]
                ,"24fc44f4":["4CA9A8",55.989,37.533,255,1650,146,"6571","F-UUEE6","B773","EI-UNL",1595241763,"GDX","SVO","SU6290",0,-768,"SDM6290",0,"SDM"]
                ,"24fc9078":["4C01EA",56.098,37.747,137,2650,197,"6010","F-UUEE8","A319","YU-APK",1595241773,"BEG","SVO","JU4650",0,0,"ASL4650",0,"ASL"]
                ,"24fcc0d3":["42448A",55.504,37.786,355,4725,262,"2741","F-UUDD1","A20N","VQ-BTO",1595241759,"DME","OVB","S72507",0,1280,"SBI2507",0,"SBI"]
                ,"24fca15b":["155C2F",56.062,37.868,355,36050,394,"2454","T-UUEE47","SU95","RA-89135",1595241764,"AER","CEE","D264",0,-192,"SSF64",0,"SSF"]
                ,"24fc1c1c":["10C377",55.424,37.876,243,0,0,"0000","T-UUDD36","","",1595241747,"DME","","RA50039",1,0,"RA50039",0,""]
                ,"24fc49f2":["43BE93",55.410,37.888,354,0,27,"1604","F-UUDD1","A20N","VP-BRX",1595241769,"BQS","DME","U6350",1,0,"SVR350",0,"SVR"]
                ,"24fcc6be":["4249CE",55.409,37.890,146,0,16,"2174","F-UUDD1","A321","VQ-BKG",1595241773,"DME","AER","U6447",1,0,"SVR447",0,"SVR"]
                ,"24fcc5a8":["42456E",55.404,37.897,146,0,26,"2760","F-UUDD1","A321","VQ-BQI",1595241770,"DME","SIP","S72009",1,0,"SBI2009",0,"SBI"]
                ,"24fcc8e4":["4242C0",55.412,37.899,70,0,10,"2162","F-UUDD1","A320","VP-BOJ",1595241773,"DME","MCX","S72157",1,0,"SBI2157",0,"SBI"]
                ,"24fcc4eb":["42433D",55.396,37.902,323,0,29,"1523","F-UUDD1","B738","VP-BLD",1595241772,"DME","GDZ","S72097",1,0,"SBI2097",0,"SBI"]
                ,"24fca20a":["4240C9",55.411,37.904,340,0,30,"5612","F-UUDD1","A319","VP-BHG",1595241772,"PEE","DME","S71156",1,0,"SBI1156",0,"SBI"]
                ,"24fcc70b":["15069E",55.396,37.905,89,0,0,"2154","F-UUDD1","CRJ2","RA-67230",1595241773,"DME","CEE","D2164",1,0,"SSF164",0,"SSF"]
                ,"24fcc64f":["424938",55.412,37.908,180,0,0,"1576","F-UUDD1","B738","VQ-BDN",1595241773,"DME","AER","Y7402",1,0,"TYA402",0,"TYA"]
                ,"24fca8c7":["424957",55.341,37.968,325,1850,135,"0730","F-UUDD1","A320","VQ-BET",1595241774,"LED","DME","S71010",0,-768,"SBI1010",0,"SBI"]
                ,"24fc9c2e":["4242EB",56.062,37.977,326,9000,282,"1053","F-UUDD1","A320","VP-BTI",1595241773,"OGZ","SVO","SU1043",0,-64,"AFL1043",0,"AFL"]
                ,"24fcbfa9":["424390",55.665,40.534,90,34050,460,"2731","F-UUDD1","B738","VP-BQJ",1595241774,"VKO","CEK","DP415",0,1024,"PBD415",0,"PBD"]
                ,"24fca52f":["42437C",56.140,41.180,282,36000,426,"5541","F-UUWR1","A320","VP-BTJ",1595241774,"SVX","SVO","SU1401",0,-64,"AFL1401",0,"AFL"]
            });
        },Math.floor(Math.random() * 1000))
      
    });
    
    app.listen(3020, function () {
        console.log('mock server on port 3020!');
    });
}
