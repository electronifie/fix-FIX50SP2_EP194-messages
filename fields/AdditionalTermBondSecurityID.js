var invert = require('invert-obj');

function AdditionalTermBondSecurityID (additionalTermBondSecurityId) {
  this.message = additionalTermBondSecurityId;
}

AdditionalTermBondSecurityID.prototype.value = function () {
  return this.message;
};

AdditionalTermBondSecurityID.Tag = '40001';

AdditionalTermBondSecurityID.Type = 'STRING';

module.exports = AdditionalTermBondSecurityID;