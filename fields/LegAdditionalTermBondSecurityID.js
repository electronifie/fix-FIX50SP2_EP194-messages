var invert = require('invert-obj');

function LegAdditionalTermBondSecurityID (legAdditionalTermBondSecurityId) {
  this.message = legAdditionalTermBondSecurityId;
}

LegAdditionalTermBondSecurityID.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondSecurityID.Tag = '41317';

LegAdditionalTermBondSecurityID.Type = 'STRING';

module.exports = LegAdditionalTermBondSecurityID;