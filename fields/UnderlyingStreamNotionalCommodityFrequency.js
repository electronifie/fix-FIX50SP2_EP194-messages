var invert = require('invert-obj');

function UnderlyingStreamNotionalCommodityFrequency (underlyingStreamNotionalCommodityFrequency) {
  this.message = underlyingStreamNotionalCommodityFrequency;
}

UnderlyingStreamNotionalCommodityFrequency.prototype.value = function () {
  return this.message;
};

UnderlyingStreamNotionalCommodityFrequency.Tag = '42021';

UnderlyingStreamNotionalCommodityFrequency.Type = 'INT';

module.exports = UnderlyingStreamNotionalCommodityFrequency;