var invert = require('invert-obj');

function FillYield (fillYield) {
  this.message = fillYield;
}

FillYield.prototype.value = function () {
  return this.message;
};

FillYield.Tag = '1623';

FillYield.Type = 'PERCENTAGE';

module.exports = FillYield;