var LegSecurityXMLLen = require('../fields/LegSecurityXMLLen');
var LegSecurityXML = require('../fields/LegSecurityXML');
var LegSecurityXMLSchema = require('../fields/LegSecurityXMLSchema');

function LegSecurityXML (legSecurityXml) {
  this.message = legSecurityXml;
}
/* field */
LegSecurityXML.prototype.legSecurityXmllen = function () {
  return new LegSecurityXMLLen(this.message.tags[LegSecurityXMLLen.Tag]);
};

/* field */
LegSecurityXML.prototype.legSecurityXml = function () {
  return new LegSecurityXML(this.message.tags[LegSecurityXML.Tag]);
};

/* field */
LegSecurityXML.prototype.legSecurityXmlschema = function () {
  return new LegSecurityXMLSchema(this.message.tags[LegSecurityXMLSchema.Tag]);
};



LegSecurityXML.Tag = '1871';

module.exports = LegSecurityXML;