const mongodb = require('mongodb');
const User = require('../models/matrix');


exports.getdata = async (req, res, next) => {
    try {
        const data = await User.find();
        let arr = data[0].country;
        let arr2 = [[], [], []];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < 3; j++) {
                const random = Math.floor(Math.random() * arr.length);
                arr2[i][j] = arr[random];
            }
        }
        let indiar = [];
        let nepalr = [];
        let finlandr = [];
        let germanyr = [];
        for (let i = 0; i < arr2.length; i++) {
            let j = 0;
            while (j < arr2.length) {
                if (arr2[i][j] == "india" && arr2[i][j + 1] == "india" && arr2[i][j + 2] == "india") {
                    indiar.push(3);
                } else if (arr2[i][j] == "nepal" && arr2[i][j + 1] == "nepal" && arr2[i][j + 2] == "nepal") {
                    nepalr.push(3);
                } else if (arr2[i][j] == "finland" && arr2[i][j + 1] == "finland" && arr2[i][j + 2] == "finland") {
                    finlandr.push(3);
                } else if (arr2[i][j] == "germany" && arr2[i][j + 1] == "germany" && arr2[i][j + 2] == "germany") {
                    germanyr.push(2);
                } else if (arr2[i][j] == 'india' && arr2[i][j + 1] == 'india') {
                    indiar.push(2);
                } else if (arr2[i][j] == 'nepal' && arr2[i][j + 1] == 'nepal') {
                    nepalr.push(2);
                } else if (arr2[i][j] == 'finland' && arr2[i][j + 1] == 'finland') {
                    finlandr.push(2);
                } else if (arr2[i][j] == 'germany' && arr2[i][j + 1] == 'germany') {
                    germanyr.push(2);
                }
                j++
            }
        }
        let rank = { india: Math.max(...indiar), nepal: Math.max(...nepalr), finland: Math.max(...finlandr), germany: Math.max(...germanyr) }
        res.status(200).json({ arr2, rank });
    } catch (err) {
        res.status(400).json({ err })
    }
}
