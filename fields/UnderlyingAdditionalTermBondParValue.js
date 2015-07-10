var invert = require('invert-obj');

function UnderlyingAdditionalTermBondParValue (underlyingAdditionalTermBondParValue) {
  this.message = underlyingAdditionalTermBondParValue;
}

UnderlyingAdditionalTermBondParValue.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondParValue.Tag = '42031';

UnderlyingAdditionalTermBondParValue.Type = 'AMT';

module.exports = UnderlyingAdditionalTermBondParValue;