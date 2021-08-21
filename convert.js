const HexToFloat32 = require('./HexToFloat32')
module.exports = function intconvert (value) {
    const int2 = value 
    const int3 = Buffer.from(int2, 'hex');
    const int4 = int3.readIntLE(0, 4).toString(16)
    const int5 = Number.parseInt(int4, 16)
    const int6 = HexToFloat32(int3.readIntLE(0, 4).toString(16))
    if ( int5.toString().length < 6 ) {
        return int5
    } else {
        return int6
    }
    
}
diff --git a/floatFilter.js b/floatFilter.js
