var invert = require('invert-obj');

function CustodialLotID (custodialLotId) {
  this.message = custodialLotId;
}

CustodialLotID.prototype.value = function () {
  return this.message;
};

CustodialLotID.Tag = '1752';

CustodialLotID.Type = 'STRING';

module.exports = CustodialLotID;