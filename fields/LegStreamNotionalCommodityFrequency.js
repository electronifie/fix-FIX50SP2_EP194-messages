var invert = require('invert-obj');

function LegStreamNotionalCommodityFrequency (legStreamNotionalCommodityFrequency) {
  this.message = legStreamNotionalCommodityFrequency;
}

LegStreamNotionalCommodityFrequency.prototype.value = function () {
  return this.message;
};

LegStreamNotionalCommodityFrequency.Tag = '41705';

LegStreamNotionalCommodityFrequency.Type = 'INT';

module.exports = LegStreamNotionalCommodityFrequency;