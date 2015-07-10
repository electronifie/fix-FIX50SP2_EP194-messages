var invert = require('invert-obj');

function LegComplexEventQuoteBasis (legComplexEventQuoteBasis) {
  this.message = legComplexEventQuoteBasis;
}

LegComplexEventQuoteBasis.prototype.value = function () {
  return this.message;
};

LegComplexEventQuoteBasis.Tag = '2235';

LegComplexEventQuoteBasis.Type = 'INT';

module.exports = LegComplexEventQuoteBasis;