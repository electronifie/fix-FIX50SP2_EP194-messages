var invert = require('invert-obj');

function LegAdditionalTermBondDayCount (legAdditionalTermBondDayCount) {
  this.message = legAdditionalTermBondDayCount;
}

LegAdditionalTermBondDayCount.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondDayCount.Tag = '41334';

LegAdditionalTermBondDayCount.Type = 'INT';

module.exports = LegAdditionalTermBondDayCount;