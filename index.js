const intConvert = require('./convert');
const strconvert = require('./strconvert');
const { readFile } = require('fs/promises');


const readElements = async (pachtArquivo, encoding) => {
    const result = await readFile(pachtArquivo, encoding)
    const dex = result
    const variante = []
    const delta = [[]]
    const byteOffset = []
    const hex = []
    const elist = [{ id: '', name: '', nParams: '', params1: '', params2: '', params3: '', }]
    //-------------------110885550 /1108855
    for (let i = 0; i < 6000; i++) { variante.push(dex[i]) }
    const nomes = variante.join('')
    const nomess = nomes.split("")

    let a = 0
    let b = 4
    for (let c = 0; c < nomess.length; c++) {
        let vai = nomess.slice(a, b).join('')
        delta.push([vai])
        a = a + 4
        b = b + 4
    }
    byteOffset.push(delta[1], delta[2], delta[3],)
    for (let i = 0; i < 7; i++) {
        delta.shift()
    }
    for (let i = 0; i < delta.length; i++) {
        let go = delta.slice(0, 42).join('')
        if (go != 0) {
            hex.push(go);
        }

        for (let j = 0; j < 42; j++) {
            delta.shift()
        }
    }
    delta.shift()
    let cont = hex.length - 1
    for (let i = 0; i < cont; i++) {
        let id = hex[i].slice(0, 8).toString()
        let name = hex[i].slice(8, 136)
        let nParams = hex[i].slice(136, 144).toString()
        let params1 = hex[i].slice(144, 152).toString()
        let params2 = hex[i].slice(152, 160).toString()
        let params3 = hex[i].slice(160, 168).toString()
        if (id || name || nParams || params || params2 || params3 != 0) {
            elist.push({
                id: intConvert(id),
                name: strconvert(name),
                nParams: intConvert(nParams),
                params1: intConvert(params1),
                params2: intConvert(params2),
                params3: intConvert(params3)
            })
        }



    }
    elist.shift()
    return console.table(elist);
}


const pachtArquivo = 'element.data'
const encoding = 'hex'
readElements(pachtArquivo, encoding)
