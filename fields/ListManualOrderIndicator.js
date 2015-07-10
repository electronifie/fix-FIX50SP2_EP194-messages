var invert = require('invert-obj');

function ListManualOrderIndicator (listManualOrderIndicator) {
  this.message = listManualOrderIndicator;
}

ListManualOrderIndicator.prototype.value = function () {
  return this.message;
};

ListManualOrderIndicator.Tag = '2401';

ListManualOrderIndicator.Type = 'BOOLEAN';

module.exports = ListManualOrderIndicator;