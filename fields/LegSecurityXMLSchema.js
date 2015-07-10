var invert = require('invert-obj');

function LegSecurityXMLSchema (legSecurityXmlschema) {
  this.message = legSecurityXmlschema;
}

LegSecurityXMLSchema.prototype.value = function () {
  return this.message;
};

LegSecurityXMLSchema.Tag = '1873';

LegSecurityXMLSchema.Type = 'STRING';

module.exports = LegSecurityXMLSchema;