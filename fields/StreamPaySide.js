var invert = require('invert-obj');

function StreamPaySide (streamPaySide) {
  this.message = streamPaySide;
}

StreamPaySide.prototype.value = function () {
  return this.message;
};

StreamPaySide.Tag = '40052';

StreamPaySide.Type = 'INT';

module.exports = StreamPaySide;