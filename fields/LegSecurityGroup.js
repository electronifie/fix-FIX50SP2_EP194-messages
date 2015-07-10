var invert = require('invert-obj');

function LegSecurityGroup (legSecurityGroup) {
  this.message = legSecurityGroup;
}

LegSecurityGroup.prototype.value = function () {
  return this.message;
};

LegSecurityGroup.Tag = '1594';

LegSecurityGroup.Type = 'STRING';

module.exports = LegSecurityGroup;