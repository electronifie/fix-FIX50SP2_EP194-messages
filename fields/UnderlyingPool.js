var invert = require('invert-obj');

function UnderlyingPool (underlyingPool) {
  this.message = underlyingPool;
}

UnderlyingPool.prototype.value = function () {
  return this.message;
};

UnderlyingPool.Tag = '2039';

UnderlyingPool.Type = 'STRING';

module.exports = UnderlyingPool;