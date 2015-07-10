var invert = require('invert-obj');

function UnderlyingComplexEventFixingTimeBusinessCenter (underlyingComplexEventFixingTimeBusinessCenter) {
  this.message = underlyingComplexEventFixingTimeBusinessCenter;
}

UnderlyingComplexEventFixingTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventFixingTimeBusinessCenter.Tag = '41747';

UnderlyingComplexEventFixingTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingComplexEventFixingTimeBusinessCenter;