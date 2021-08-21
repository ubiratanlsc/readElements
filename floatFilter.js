module.exports  = function filterFloat( value ) {
    const valor = '\\d{1}.\\d{2}'
    const floatTest = new RegExp(valor)
    return floatTest.test(value)
 }