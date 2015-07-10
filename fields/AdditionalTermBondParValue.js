var invert = require('invert-obj');

function AdditionalTermBondParValue (additionalTermBondParValue) {
  this.message = additionalTermBondParValue;
}

AdditionalTermBondParValue.prototype.value = function () {
  return this.message;
};

AdditionalTermBondParValue.Tag = '40014';

AdditionalTermBondParValue.Type = 'AMT';

module.exports = AdditionalTermBondParValue;