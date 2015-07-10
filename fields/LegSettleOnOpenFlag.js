var invert = require('invert-obj');

function LegSettleOnOpenFlag (legSettleOnOpenFlag) {
  this.message = legSettleOnOpenFlag;
}

LegSettleOnOpenFlag.prototype.value = function () {
  return this.message;
};

LegSettleOnOpenFlag.Tag = '2146';

LegSettleOnOpenFlag.Type = 'STRING';

module.exports = LegSettleOnOpenFlag;