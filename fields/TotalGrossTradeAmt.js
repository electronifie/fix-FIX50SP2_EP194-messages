var invert = require('invert-obj');

function TotalGrossTradeAmt (totalGrossTradeAmt) {
  this.message = totalGrossTradeAmt;
}

TotalGrossTradeAmt.prototype.value = function () {
  return this.message;
};

TotalGrossTradeAmt.Tag = '2369';

TotalGrossTradeAmt.Type = 'AMT';

module.exports = TotalGrossTradeAmt;