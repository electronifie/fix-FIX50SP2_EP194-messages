var invert = require('invert-obj');

function UnderlyingAdditionalTermBondDesc (underlyingAdditionalTermBondDesc) {
  this.message = underlyingAdditionalTermBondDesc;
}

UnderlyingAdditionalTermBondDesc.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondDesc.Tag = '41709';

UnderlyingAdditionalTermBondDesc.Type = 'STRING';

module.exports = UnderlyingAdditionalTermBondDesc;