var invert = require('invert-obj');

function ValuationSource (valuationSource) {
  this.message = valuationSource;
}

ValuationSource.prototype.value = function () {
  return this.message;
};

ValuationSource.Tag = '2002';

ValuationSource.Type = 'STRING';

module.exports = ValuationSource;