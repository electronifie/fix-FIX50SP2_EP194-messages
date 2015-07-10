var invert = require('invert-obj');

function UnderlyingComplexEventStrikeNumberOfOptions (underlyingComplexEventStrikeNumberOfOptions) {
  this.message = underlyingComplexEventStrikeNumberOfOptions;
}

UnderlyingComplexEventStrikeNumberOfOptions.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventStrikeNumberOfOptions.Tag = '2276';

UnderlyingComplexEventStrikeNumberOfOptions.Type = 'INT';

module.exports = UnderlyingComplexEventStrikeNumberOfOptions;