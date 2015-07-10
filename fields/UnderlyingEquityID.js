var invert = require('invert-obj');

function UnderlyingEquityID (underlyingEquityId) {
  this.message = underlyingEquityId;
}

UnderlyingEquityID.prototype.value = function () {
  return this.message;
};

UnderlyingEquityID.Tag = '1996';

UnderlyingEquityID.Type = 'STRING';

module.exports = UnderlyingEquityID;