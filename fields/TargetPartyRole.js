var invert = require('invert-obj');

function TargetPartyRole (targetPartyRole) {
  this.message = targetPartyRole;
}

TargetPartyRole.prototype.value = function () {
  return this.message;
};

TargetPartyRole.Tag = '1464';

TargetPartyRole.Type = 'INT';

module.exports = TargetPartyRole;