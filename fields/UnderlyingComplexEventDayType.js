var invert = require('invert-obj');

function UnderlyingComplexEventDayType (underlyingComplexEventDayType) {
  this.message = underlyingComplexEventDayType;
}

UnderlyingComplexEventDayType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventDayType.Tag = '41743';

UnderlyingComplexEventDayType.Type = 'INT';

module.exports = UnderlyingComplexEventDayType;