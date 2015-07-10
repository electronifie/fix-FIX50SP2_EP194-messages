var invert = require('invert-obj');

function TradeClearingInstruction (tradeClearingInstruction) {
  this.message = tradeClearingInstruction;
}

TradeClearingInstruction.prototype.value = function () {
  return this.message;
};

TradeClearingInstruction.Tag = '1925';

TradeClearingInstruction.Type = 'INT';

module.exports = TradeClearingInstruction;