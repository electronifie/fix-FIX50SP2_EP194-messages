var invert = require('invert-obj');

function UnderlyingPhysicalSettlBusinessDays (underlyingPhysicalSettlBusinessDays) {
  this.message = underlyingPhysicalSettlBusinessDays;
}

UnderlyingPhysicalSettlBusinessDays.prototype.value = function () {
  return this.message;
};

UnderlyingPhysicalSettlBusinessDays.Tag = '42062';

UnderlyingPhysicalSettlBusinessDays.Type = 'INT';

module.exports = UnderlyingPhysicalSettlBusinessDays;