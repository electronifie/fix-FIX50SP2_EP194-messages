var invert = require('invert-obj');

function UnderlyingComplexEventAveragingWeight (underlyingComplexEventAveragingWeight) {
  this.message = underlyingComplexEventAveragingWeight;
}

UnderlyingComplexEventAveragingWeight.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventAveragingWeight.Tag = '41715';

UnderlyingComplexEventAveragingWeight.Type = 'FLOAT';

module.exports = UnderlyingComplexEventAveragingWeight;