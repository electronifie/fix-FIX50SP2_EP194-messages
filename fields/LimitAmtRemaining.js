var invert = require('invert-obj');

function LimitAmtRemaining (limitAmtRemaining) {
  this.message = limitAmtRemaining;
}

LimitAmtRemaining.prototype.value = function () {
  return this.message;
};

LimitAmtRemaining.Tag = '1633';

LimitAmtRemaining.Type = 'AMT';

module.exports = LimitAmtRemaining;