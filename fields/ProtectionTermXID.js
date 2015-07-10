var invert = require('invert-obj');

function ProtectionTermXID (protectionTermXid) {
  this.message = protectionTermXid;
}

ProtectionTermXID.prototype.value = function () {
  return this.message;
};

ProtectionTermXID.Tag = '40190';

ProtectionTermXID.Type = 'XID';

module.exports = ProtectionTermXID;