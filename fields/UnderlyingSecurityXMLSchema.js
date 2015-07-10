var invert = require('invert-obj');

function UnderlyingSecurityXMLSchema (underlyingSecurityXmlschema) {
  this.message = underlyingSecurityXmlschema;
}

UnderlyingSecurityXMLSchema.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityXMLSchema.Tag = '1876';

UnderlyingSecurityXMLSchema.Type = 'STRING';

module.exports = UnderlyingSecurityXMLSchema;