var invert = require('invert-obj');

function AdditionalTermBondDesc (additionalTermBondDesc) {
  this.message = additionalTermBondDesc;
}

AdditionalTermBondDesc.prototype.value = function () {
  return this.message;
};

AdditionalTermBondDesc.Tag = '40003';

AdditionalTermBondDesc.Type = 'STRING';

module.exports = AdditionalTermBondDesc;