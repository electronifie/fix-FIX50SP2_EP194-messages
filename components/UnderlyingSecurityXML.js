var UnderlyingSecurityXMLLen = require('../fields/UnderlyingSecurityXMLLen');
var UnderlyingSecurityXML = require('../fields/UnderlyingSecurityXML');
var UnderlyingSecurityXMLSchema = require('../fields/UnderlyingSecurityXMLSchema');

function UnderlyingSecurityXML (underlyingSecurityXml) {
  this.message = underlyingSecurityXml;
}
/* field */
UnderlyingSecurityXML.prototype.underlyingSecurityXmllen = function () {
  return new UnderlyingSecurityXMLLen(this.message.tags[UnderlyingSecurityXMLLen.Tag]);
};

/* field */
UnderlyingSecurityXML.prototype.underlyingSecurityXml = function () {
  return new UnderlyingSecurityXML(this.message.tags[UnderlyingSecurityXML.Tag]);
};

/* field */
UnderlyingSecurityXML.prototype.underlyingSecurityXmlschema = function () {
  return new UnderlyingSecurityXMLSchema(this.message.tags[UnderlyingSecurityXMLSchema.Tag]);
};



UnderlyingSecurityXML.Tag = '1874';

module.exports = UnderlyingSecurityXML;