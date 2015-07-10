var invert = require('invert-obj');

function UnderlyingAdditionalTermBondDayCount (underlyingAdditionalTermBondDayCount) {
  this.message = underlyingAdditionalTermBondDayCount;
}

UnderlyingAdditionalTermBondDayCount.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondDayCount.Tag = '42035';

UnderlyingAdditionalTermBondDayCount.Type = 'INT';

module.exports = UnderlyingAdditionalTermBondDayCount;