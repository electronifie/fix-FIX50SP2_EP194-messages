var invert = require('invert-obj');

function CollectAmount (collectAmount) {
  this.message = collectAmount;
}

CollectAmount.prototype.value = function () {
  return this.message;
};

CollectAmount.Tag = '1711';

CollectAmount.Type = 'AMT';

module.exports = CollectAmount;