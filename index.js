const express = require('express');
const { Buffer } = require('buffer');
const HexToFloat32 = require('./HexToFloat32')


const app = express();
app.listen(3000, () =>
    console.log("Ok")
);

const fs = require('fs');
const e = require('express');
const { join } = require('path');

fs.readFile('elements.data', 'hex', function (err, data) {
    const dex = data
    const variante = []
    const delta = []
    const hex = []
    const elist = []
    const listas = []
    const listasCaracter = []
    const aElements = []
    const namesElements = []
    const proprietsElements = []

    for (let i = 0; i < 10000; i++) { variante.push(dex[i]) }
    const nomes = variante.join('')
    const nomess = nomes.split("")
    let a = 0
    let b = 8
    for (let c = 0; c < 1000; c++) {
        let vai = nomess.slice(a, b).join('')
        delta.push(vai)
        a = a + 8
        b = b + 8
    }
    for (let i = 0; i < delta.length; i++) {
        if (delta[i][0] == 0 && delta[i][1] == 0 || delta[i][2] == 0 && delta[i][3] == 0 || delta[i][4] == 0 && delta[i][5] == 0 || delta[i][6] == 0 && delta[i][7] == 0) {
            let go = delta[i].slice(0, 4)
            hex.push(go)
            let go2 = delta[i].slice(4, 8)
            hex.push(go2)
        } else {
            hex.push(delta[i])
        }
    }
    for (let i = 0; i < 1000; i++) {
        const str2 = hex[i]
        const abuf2 = Buffer.from(str2, 'hex');
        elist.push(abuf2)
    }
    for (let i = 0; i < 1000; i++) {
        if (elist[i].length == 4) {
            listasCaracter.push(HexToFloat32(elist[i].readIntLE(0, 4).toString(16)))
        } else {
            const abuf3 = elist[i].readIntLE(0, 2).toString(16)
            const abuf4 = Number.parseInt(abuf3, 16)
            listas.push(abuf4)
            listasCaracter.push(abuf3)
        }
    }
