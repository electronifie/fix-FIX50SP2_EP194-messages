var invert = require('invert-obj');

function UnderlyingProtectionTermXID (underlyingProtectionTermXid) {
  this.message = underlyingProtectionTermXid;
}

UnderlyingProtectionTermXID.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermXID.Tag = '42076';

UnderlyingProtectionTermXID.Type = 'XID';

module.exports = UnderlyingProtectionTermXID;