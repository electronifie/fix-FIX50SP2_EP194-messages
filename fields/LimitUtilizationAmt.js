var invert = require('invert-obj');

function LimitUtilizationAmt (limitUtilizationAmt) {
  this.message = limitUtilizationAmt;
}

LimitUtilizationAmt.prototype.value = function () {
  return this.message;
};

LimitUtilizationAmt.Tag = '2394';

LimitUtilizationAmt.Type = 'AMT';

module.exports = LimitUtilizationAmt;