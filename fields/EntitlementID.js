var invert = require('invert-obj');

function EntitlementID (entitlementId) {
  this.message = entitlementId;
}

EntitlementID.prototype.value = function () {
  return this.message;
};

EntitlementID.Tag = '1776';

EntitlementID.Type = 'STRING';

module.exports = EntitlementID;