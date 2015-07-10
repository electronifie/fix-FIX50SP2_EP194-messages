var invert = require('invert-obj');

function UnderlyingObligationID (underlyingObligationId) {
  this.message = underlyingObligationId;
}

UnderlyingObligationID.prototype.value = function () {
  return this.message;
};

UnderlyingObligationID.Tag = '1994';

UnderlyingObligationID.Type = 'STRING';

module.exports = UnderlyingObligationID;