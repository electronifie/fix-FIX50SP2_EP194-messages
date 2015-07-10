var invert = require('invert-obj');

function UnderlyingSecurityStatus (underlyingSecurityStatus) {
  this.message = underlyingSecurityStatus;
}

UnderlyingSecurityStatus.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityStatus.Tag = '2011';

UnderlyingSecurityStatus.Type = 'STRING';

module.exports = UnderlyingSecurityStatus;