var invert = require('invert-obj');

function TotNumCollateralRequests (totNumCollateralRequests) {
  this.message = totNumCollateralRequests;
}

TotNumCollateralRequests.prototype.value = function () {
  return this.message;
};

TotNumCollateralRequests.Tag = '2519';

TotNumCollateralRequests.Type = 'INT';

module.exports = TotNumCollateralRequests;