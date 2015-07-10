var invert = require('invert-obj');

function UnderlyingComplexEventQuoteBasis (underlyingComplexEventQuoteBasis) {
  this.message = underlyingComplexEventQuoteBasis;
}

UnderlyingComplexEventQuoteBasis.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventQuoteBasis.Tag = '2270';

UnderlyingComplexEventQuoteBasis.Type = 'INT';

module.exports = UnderlyingComplexEventQuoteBasis;