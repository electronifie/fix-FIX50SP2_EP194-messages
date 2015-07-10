var invert = require('invert-obj');

function UnderlyingSettleOnOpenFlag (underlyingSettleOnOpenFlag) {
  this.message = underlyingSettleOnOpenFlag;
}

UnderlyingSettleOnOpenFlag.prototype.value = function () {
  return this.message;
};

UnderlyingSettleOnOpenFlag.Tag = '2009';

UnderlyingSettleOnOpenFlag.Type = 'STRING';

module.exports = UnderlyingSettleOnOpenFlag;