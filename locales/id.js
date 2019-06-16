
// numeral.js locale configuration
// locale : Indonesia (id)
// author : Asep Sulaeman : https://github.com/asule90

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'id', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
          thousand: 'ribu',
          million: 'juta',
          billion: 'miliar',
          trillion: 'triliun'
        },
        currency: {
            symbol: 'Rp'
        }
    });
}));
