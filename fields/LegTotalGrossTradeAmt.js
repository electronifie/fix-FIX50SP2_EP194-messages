var invert = require('invert-obj');

function LegTotalGrossTradeAmt (legTotalGrossTradeAmt) {
  this.message = legTotalGrossTradeAmt;
}

LegTotalGrossTradeAmt.prototype.value = function () {
  return this.message;
};

LegTotalGrossTradeAmt.Tag = '2359';

LegTotalGrossTradeAmt.Type = 'AMT';

module.exports = LegTotalGrossTradeAmt;