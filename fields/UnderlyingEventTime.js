var invert = require('invert-obj');

function UnderlyingEventTime (underlyingEventTime) {
  this.message = underlyingEventTime;
}

UnderlyingEventTime.prototype.value = function () {
  return this.message;
};

UnderlyingEventTime.Tag = '1984';

UnderlyingEventTime.Type = 'UTCTIMESTAMP';

module.exports = UnderlyingEventTime;