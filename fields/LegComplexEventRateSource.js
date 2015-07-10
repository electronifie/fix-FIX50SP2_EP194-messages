var invert = require('invert-obj');

function LegComplexEventRateSource (legComplexEventRateSource) {
  this.message = legComplexEventRateSource;
}

LegComplexEventRateSource.prototype.value = function () {
  return this.message;
};

LegComplexEventRateSource.Tag = '41383';

LegComplexEventRateSource.Type = 'INT';

module.exports = LegComplexEventRateSource;