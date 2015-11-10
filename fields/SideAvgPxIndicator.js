var invert = require('invert-obj');

function SideAvgPxIndicator (sideAvgPxIndicator) {
  this.message = sideAvgPxIndicator;
}

SideAvgPxIndicator.prototype.value = function () {
  return this.message;
};


SideAvgPxIndicator.Keys = {
  'NO_AVERAGE_PRICING': '0',
  'TRADE_IS_PART_OF_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_SIDEAVGPXGROUPID': '1',
  'LAST_TRADE_IS_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_SIDEAVGPXGROUPID': '2',
};

SideAvgPxIndicator.Tag = '1853';

SideAvgPxIndicator.Type = 'INT';

SideAvgPxIndicator.Values = invert(SideAvgPxIndicator.Keys);

module.exports = SideAvgPxIndicator;