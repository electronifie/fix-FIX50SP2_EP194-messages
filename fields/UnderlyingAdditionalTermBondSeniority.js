var invert = require('invert-obj');

function UnderlyingAdditionalTermBondSeniority (underlyingAdditionalTermBondSeniority) {
  this.message = underlyingAdditionalTermBondSeniority;
}

UnderlyingAdditionalTermBondSeniority.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondSeniority.Tag = '42027';

UnderlyingAdditionalTermBondSeniority.Type = 'STRING';

module.exports = UnderlyingAdditionalTermBondSeniority;