var invert = require('invert-obj');

function UnderlyingEventTimeUnit (underlyingEventTimeUnit) {
  this.message = underlyingEventTimeUnit;
}

UnderlyingEventTimeUnit.prototype.value = function () {
  return this.message;
};

UnderlyingEventTimeUnit.Tag = '1985';

UnderlyingEventTimeUnit.Type = 'STRING';

module.exports = UnderlyingEventTimeUnit;