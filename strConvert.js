module.exports = function strconvert(value) {
    const str2 = value
    let array = []
    let a = 0
    let b = 4
    for (let c = 0; c < str2.length; c++) {
        let vai = str2.slice(a, b)
        if( vai != 0) {
            const str3 = Buffer.from(vai, 'hex');
            const str4 = str3.readIntLE(0, 2).toString(16)
            const str5 = parseInt(str4, 16)
            const str6 = String.fromCharCode(str5)
            array.push(str6)
        }
        
        a = a + 4
        b = b + 4
    }
    
    let tenso = array.join('')
    return tenso
}