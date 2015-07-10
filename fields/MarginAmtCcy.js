var invert = require('invert-obj');

function MarginAmtCcy (marginAmtCcy) {
  this.message = marginAmtCcy;
}

MarginAmtCcy.prototype.value = function () {
  return this.message;
};

MarginAmtCcy.Tag = '1646';

MarginAmtCcy.Type = 'CURRENCY';

module.exports = MarginAmtCcy;