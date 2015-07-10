var invert = require('invert-obj');

function TargetPartySubIDType (targetPartySubIdtype) {
  this.message = targetPartySubIdtype;
}

TargetPartySubIDType.prototype.value = function () {
  return this.message;
};

TargetPartySubIDType.Tag = '2435';

TargetPartySubIDType.Type = 'INT';

module.exports = TargetPartySubIDType;