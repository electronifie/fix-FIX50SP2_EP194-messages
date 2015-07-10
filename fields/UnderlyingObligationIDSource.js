var invert = require('invert-obj');

function UnderlyingObligationIDSource (underlyingObligationIdsource) {
  this.message = underlyingObligationIdsource;
}

UnderlyingObligationIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingObligationIDSource.Tag = '1995';

UnderlyingObligationIDSource.Type = 'STRING';

module.exports = UnderlyingObligationIDSource;