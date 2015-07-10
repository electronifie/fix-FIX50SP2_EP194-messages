var invert = require('invert-obj');

function UnderlyingSecurityGroup (underlyingSecurityGroup) {
  this.message = underlyingSecurityGroup;
}

UnderlyingSecurityGroup.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityGroup.Tag = '2008';

UnderlyingSecurityGroup.Type = 'STRING';

module.exports = UnderlyingSecurityGroup;