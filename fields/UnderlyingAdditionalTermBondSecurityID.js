var invert = require('invert-obj');

function UnderlyingAdditionalTermBondSecurityID (underlyingAdditionalTermBondSecurityId) {
  this.message = underlyingAdditionalTermBondSecurityId;
}

UnderlyingAdditionalTermBondSecurityID.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondSecurityID.Tag = '41341';

UnderlyingAdditionalTermBondSecurityID.Type = 'STRING';

module.exports = UnderlyingAdditionalTermBondSecurityID;