var invert = require('invert-obj');

function UnderlyingProtectionTermXIDRef (underlyingProtectionTermXidref) {
  this.message = underlyingProtectionTermXidref;
}

UnderlyingProtectionTermXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingProtectionTermXIDRef.Tag = '41314';

UnderlyingProtectionTermXIDRef.Type = 'XIDREF';

module.exports = UnderlyingProtectionTermXIDRef;