var invert = require('invert-obj');

function TargetPartyIDSource (targetPartyIdsource) {
  this.message = targetPartyIdsource;
}

TargetPartyIDSource.prototype.value = function () {
  return this.message;
};

TargetPartyIDSource.Tag = '1463';

TargetPartyIDSource.Type = 'CHAR';

module.exports = TargetPartyIDSource;