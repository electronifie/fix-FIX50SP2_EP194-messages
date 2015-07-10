var invert = require('invert-obj');

function LegProtectionTermXID (legProtectionTermXid) {
  this.message = legProtectionTermXid;
}

LegProtectionTermXID.prototype.value = function () {
  return this.message;
};

LegProtectionTermXID.Tag = '41617';

LegProtectionTermXID.Type = 'XID';

module.exports = LegProtectionTermXID;