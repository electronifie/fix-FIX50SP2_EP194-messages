var invert = require('invert-obj');

function UnderlyingEventDate (underlyingEventDate) {
  this.message = underlyingEventDate;
}

UnderlyingEventDate.prototype.value = function () {
  return this.message;
};

UnderlyingEventDate.Tag = '1983';

UnderlyingEventDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingEventDate;