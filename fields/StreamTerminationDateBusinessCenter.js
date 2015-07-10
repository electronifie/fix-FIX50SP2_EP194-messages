var invert = require('invert-obj');

function StreamTerminationDateBusinessCenter (streamTerminationDateBusinessCenter) {
  this.message = streamTerminationDateBusinessCenter;
}

StreamTerminationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

StreamTerminationDateBusinessCenter.Tag = '40067';

StreamTerminationDateBusinessCenter.Type = 'STRING';

module.exports = StreamTerminationDateBusinessCenter;