var invert = require('invert-obj');

function AdditionalTermBondSeniority (additionalTermBondSeniority) {
  this.message = additionalTermBondSeniority;
}

AdditionalTermBondSeniority.prototype.value = function () {
  return this.message;
};

AdditionalTermBondSeniority.Tag = '40010';

AdditionalTermBondSeniority.Type = 'STRING';

module.exports = AdditionalTermBondSeniority;