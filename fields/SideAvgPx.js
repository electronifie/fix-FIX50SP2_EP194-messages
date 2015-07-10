var invert = require('invert-obj');

function SideAvgPx (sideAvgPx) {
  this.message = sideAvgPx;
}

SideAvgPx.prototype.value = function () {
  return this.message;
};

SideAvgPx.Tag = '1852';

SideAvgPx.Type = 'PRICE';

module.exports = SideAvgPx;