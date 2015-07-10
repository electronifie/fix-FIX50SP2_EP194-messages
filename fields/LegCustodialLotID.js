var invert = require('invert-obj');

function LegCustodialLotID (legCustodialLotId) {
  this.message = legCustodialLotId;
}

LegCustodialLotID.prototype.value = function () {
  return this.message;
};

LegCustodialLotID.Tag = '1756';

LegCustodialLotID.Type = 'STRING';

module.exports = LegCustodialLotID;