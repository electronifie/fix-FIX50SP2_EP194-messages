var invert = require('invert-obj');

function InformationBarrierID (informationBarrierId) {
  this.message = informationBarrierId;
}

InformationBarrierID.prototype.value = function () {
  return this.message;
};

InformationBarrierID.Tag = '1727';

InformationBarrierID.Type = 'STRING';

module.exports = InformationBarrierID;