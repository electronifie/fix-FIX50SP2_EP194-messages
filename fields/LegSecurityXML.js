var invert = require('invert-obj');

function LegSecurityXML (legSecurityXml) {
  this.message = legSecurityXml;
}

LegSecurityXML.prototype.value = function () {
  return this.message;
};

LegSecurityXML.Tag = '1872';

LegSecurityXML.Type = 'XMLDATA';

module.exports = LegSecurityXML;