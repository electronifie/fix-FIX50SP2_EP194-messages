var invert = require('invert-obj');

function UnderlyingSecurityXML (underlyingSecurityXml) {
  this.message = underlyingSecurityXml;
}

UnderlyingSecurityXML.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityXML.Tag = '1875';

UnderlyingSecurityXML.Type = 'XMLDATA';

module.exports = UnderlyingSecurityXML;