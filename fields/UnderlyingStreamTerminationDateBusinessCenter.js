var invert = require('invert-obj');

function UnderlyingStreamTerminationDateBusinessCenter (underlyingStreamTerminationDateBusinessCenter) {
  this.message = underlyingStreamTerminationDateBusinessCenter;
}

UnderlyingStreamTerminationDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTerminationDateBusinessCenter.Tag = '40550';

UnderlyingStreamTerminationDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingStreamTerminationDateBusinessCenter;