var invert = require('invert-obj');

function NoLegPosAmt (noLegPosAmt) {
  this.message = noLegPosAmt;
}

NoLegPosAmt.prototype.value = function () {
  return this.message;
};

NoLegPosAmt.Tag = '1586';

NoLegPosAmt.Type = 'NUMINGROUP';

module.exports = NoLegPosAmt;