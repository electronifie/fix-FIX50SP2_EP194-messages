var invert = require('invert-obj');

function LegComplexEventBusinessCenter (legComplexEventBusinessCenter) {
  this.message = legComplexEventBusinessCenter;
}

LegComplexEventBusinessCenter.prototype.value = function () {
  return this.message;
};

LegComplexEventBusinessCenter.Tag = '41381';

LegComplexEventBusinessCenter.Type = 'STRING';

module.exports = LegComplexEventBusinessCenter;