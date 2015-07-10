var invert = require('invert-obj');

function NoLimitAmts (noLimitAmts) {
  this.message = noLimitAmts;
}

NoLimitAmts.prototype.value = function () {
  return this.message;
};

NoLimitAmts.Tag = '1630';

NoLimitAmts.Type = 'NUMINGROUP';

module.exports = NoLimitAmts;