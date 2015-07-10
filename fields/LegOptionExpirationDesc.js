var invert = require('invert-obj');

function LegOptionExpirationDesc (legOptionExpirationDesc) {
  this.message = legOptionExpirationDesc;
}

LegOptionExpirationDesc.prototype.value = function () {
  return this.message;
};

LegOptionExpirationDesc.Tag = '2178';

LegOptionExpirationDesc.Type = 'STRING';

module.exports = LegOptionExpirationDesc;