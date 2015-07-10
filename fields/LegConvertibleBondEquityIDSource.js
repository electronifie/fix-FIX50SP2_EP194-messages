var invert = require('invert-obj');

function LegConvertibleBondEquityIDSource (legConvertibleBondEquityIdsource) {
  this.message = legConvertibleBondEquityIdsource;
}

LegConvertibleBondEquityIDSource.prototype.value = function () {
  return this.message;
};

LegConvertibleBondEquityIDSource.Tag = '2167';

LegConvertibleBondEquityIDSource.Type = 'STRING';

module.exports = LegConvertibleBondEquityIDSource;