var invert = require('invert-obj');

function TargetPartyID (targetPartyId) {
  this.message = targetPartyId;
}

TargetPartyID.prototype.value = function () {
  return this.message;
};

TargetPartyID.Tag = '1462';

TargetPartyID.Type = 'STRING';

module.exports = TargetPartyID;