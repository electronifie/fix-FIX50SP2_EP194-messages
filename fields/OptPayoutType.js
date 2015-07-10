var invert = require('invert-obj');

function OptPayoutType (optPayoutType) {
  this.message = optPayoutType;
}

OptPayoutType.prototype.value = function () {
  return this.message;
};


OptPayoutType.Keys = {
  VANILLA: '1',
  CAPPED: '2',
  BINARY: '3',
};

OptPayoutType.Tag = '1482';

OptPayoutType.Type = 'INT';

OptPayoutType.Values = invert(OptPayoutType.Keys);

module.exports = OptPayoutType;