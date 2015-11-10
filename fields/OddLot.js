var invert = require('invert-obj');

function OddLot (oddLot) {
  this.message = oddLot;
}

OddLot.prototype.value = function () {
  return this.message;
};


OddLot.Keys = {
  'TREAT_AS_ROUND_LOT': 'N',
  'TREAT_AS_ODD_LOT': 'Y',
};

OddLot.Tag = '575';

OddLot.Type = 'BOOLEAN';

OddLot.Values = invert(OddLot.Keys);

module.exports = OddLot;