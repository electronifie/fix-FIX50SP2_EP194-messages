var invert = require('invert-obj');

function LegPosAmt (legPosAmt) {
  this.message = legPosAmt;
}

LegPosAmt.prototype.value = function () {
  return this.message;
};

LegPosAmt.Tag = '1587';

LegPosAmt.Type = 'AMT';

module.exports = LegPosAmt;