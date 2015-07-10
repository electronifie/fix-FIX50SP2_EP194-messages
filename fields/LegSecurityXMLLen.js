var invert = require('invert-obj');

function LegSecurityXMLLen (legSecurityXmllen) {
  this.message = legSecurityXmllen;
}

LegSecurityXMLLen.prototype.value = function () {
  return this.message;
};

LegSecurityXMLLen.Tag = '1871';

LegSecurityXMLLen.Type = 'LENGTH';

module.exports = LegSecurityXMLLen;