var invert = require('invert-obj');

function UnderlyingSecurityXMLLen (underlyingSecurityXmllen) {
  this.message = underlyingSecurityXmllen;
}

UnderlyingSecurityXMLLen.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityXMLLen.Tag = '1874';

UnderlyingSecurityXMLLen.Type = 'LENGTH';

module.exports = UnderlyingSecurityXMLLen;