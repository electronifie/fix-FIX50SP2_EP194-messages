var invert = require('invert-obj');

function EntitlementStatus (entitlementStatus) {
  this.message = entitlementStatus;
}

EntitlementStatus.prototype.value = function () {
  return this.message;
};


EntitlementStatus.Keys = {
  'ACCEPTED': '0',
  'ACCEPTED_WITH_CHANGES': '1',
  'REJECTED': '2',
  'PENDING': '3',
  'REQUESTED': '4',
  'DEFERRED': '5',
};

EntitlementStatus.Tag = '1883';

EntitlementStatus.Type = 'INT';

EntitlementStatus.Values = invert(EntitlementStatus.Keys);

module.exports = EntitlementStatus;