var invert = require('invert-obj');

function UnderlyingValuationSource (underlyingValuationSource) {
  this.message = underlyingValuationSource;
}

UnderlyingValuationSource.prototype.value = function () {
  return this.message;
};

UnderlyingValuationSource.Tag = '2293';

UnderlyingValuationSource.Type = 'STRING';

module.exports = UnderlyingValuationSource;