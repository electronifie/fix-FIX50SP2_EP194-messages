var invert = require('invert-obj');

function TargetPartySubID (targetPartySubId) {
  this.message = targetPartySubId;
}

TargetPartySubID.prototype.value = function () {
  return this.message;
};

TargetPartySubID.Tag = '2434';

TargetPartySubID.Type = 'STRING';

module.exports = TargetPartySubID;