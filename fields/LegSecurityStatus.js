var invert = require('invert-obj');

function LegSecurityStatus (legSecurityStatus) {
  this.message = legSecurityStatus;
}

LegSecurityStatus.prototype.value = function () {
  return this.message;
};

LegSecurityStatus.Tag = '2148';

LegSecurityStatus.Type = 'STRING';

module.exports = LegSecurityStatus;