// Forked 'toFloat' de https://gist.github.com/laerciobernardo/498f7ba1c269208799498ea8805d8c30
// Forked 'toHex' da resposta stackoverflow https://stackoverflow.com/a/47187116/10522253
// Modificado por: Jozo132 (https://github.com/Jozo132)
module.exports  = function HexToFloat32( str ) {
        var int = parseInt(str, 16);
            if (int > 0 || int < 0) {
                var sign = (int >>> 31) ? -1 : 1;
                var exp = (int >>> 23 & 0xff) - 127;
                var mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
                var float32 = 0
                for (i = 0; i < mantissa.length; i += 1) { float32 += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0; exp-- }
                return float32 * sign;
            } else return 0
}

