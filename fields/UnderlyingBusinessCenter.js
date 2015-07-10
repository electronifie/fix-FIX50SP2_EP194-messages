var invert = require('invert-obj');

function UnderlyingBusinessCenter (underlyingBusinessCenter) {
  this.message = underlyingBusinessCenter;
}

UnderlyingBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingBusinessCenter.Tag = '40963';

UnderlyingBusinessCenter.Type = 'STRING';

module.exports = UnderlyingBusinessCenter;