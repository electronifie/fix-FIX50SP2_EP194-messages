var invert = require('invert-obj');

function UnderlyingStrategyType (underlyingStrategyType) {
  this.message = underlyingStrategyType;
}

UnderlyingStrategyType.prototype.value = function () {
  return this.message;
};

UnderlyingStrategyType.Tag = '2295';

UnderlyingStrategyType.Type = 'STRING';

module.exports = UnderlyingStrategyType;