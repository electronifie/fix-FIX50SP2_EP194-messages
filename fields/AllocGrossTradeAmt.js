var invert = require('invert-obj');

function AllocGrossTradeAmt (allocGrossTradeAmt) {
  this.message = allocGrossTradeAmt;
}

AllocGrossTradeAmt.prototype.value = function () {
  return this.message;
};

AllocGrossTradeAmt.Tag = '2300';

AllocGrossTradeAmt.Type = 'AMT';

module.exports = AllocGrossTradeAmt;