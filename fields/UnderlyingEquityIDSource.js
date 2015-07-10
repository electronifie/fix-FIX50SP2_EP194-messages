var invert = require('invert-obj');

function UnderlyingEquityIDSource (underlyingEquityIdsource) {
  this.message = underlyingEquityIdsource;
}

UnderlyingEquityIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingEquityIDSource.Tag = '1997';

UnderlyingEquityIDSource.Type = 'STRING';

module.exports = UnderlyingEquityIDSource;