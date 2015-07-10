var invert = require('invert-obj');

function AdditionalTermBondDayCount (additionalTermBondDayCount) {
  this.message = additionalTermBondDayCount;
}

AdditionalTermBondDayCount.prototype.value = function () {
  return this.message;
};

AdditionalTermBondDayCount.Tag = '40018';

AdditionalTermBondDayCount.Type = 'INT';

module.exports = AdditionalTermBondDayCount;