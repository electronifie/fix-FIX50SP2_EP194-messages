var invert = require('invert-obj');

function PossDupFlag (possDupFlag) {
  this.message = possDupFlag;
}

PossDupFlag.prototype.value = function () {
  return this.message;
};


PossDupFlag.Keys = {
  ORIGINAL_TRANSMISSION: 'N',
  POSSIBLE_DUPLICATE: 'Y',
};

PossDupFlag.Tag = '43';

PossDupFlag.Type = 'BOOLEAN';

PossDupFlag.Values = invert(PossDupFlag.Keys);

module.exports = PossDupFlag;