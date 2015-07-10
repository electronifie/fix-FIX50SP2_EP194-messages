var invert = require('invert-obj');

function InstrumentScopeCouponRate (instrumentScopeCouponRate) {
  this.message = instrumentScopeCouponRate;
}

InstrumentScopeCouponRate.prototype.value = function () {
  return this.message;
};

InstrumentScopeCouponRate.Tag = '1555';

InstrumentScopeCouponRate.Type = 'PERCENTAGE';

module.exports = InstrumentScopeCouponRate;