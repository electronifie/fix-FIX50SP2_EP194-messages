var invert = require('invert-obj');

function NoMDStatistics (noMdstatistics) {
  this.message = noMdstatistics;
}

NoMDStatistics.prototype.value = function () {
  return this.message;
};

NoMDStatistics.Tag = '2474';

NoMDStatistics.Type = 'NUMINGROUP';

module.exports = NoMDStatistics;