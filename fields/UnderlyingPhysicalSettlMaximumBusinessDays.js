var invert = require('invert-obj');

function UnderlyingPhysicalSettlMaximumBusinessDays (underlyingPhysicalSettlMaximumBusinessDays) {
  this.message = underlyingPhysicalSettlMaximumBusinessDays;
}

UnderlyingPhysicalSettlMaximumBusinessDays.prototype.value = function () {
  return this.message;
};

UnderlyingPhysicalSettlMaximumBusinessDays.Tag = '42063';

UnderlyingPhysicalSettlMaximumBusinessDays.Type = 'INT';

module.exports = UnderlyingPhysicalSettlMaximumBusinessDays;