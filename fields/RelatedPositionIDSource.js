var invert = require('invert-obj');

function RelatedPositionIDSource (relatedPositionIdsource) {
  this.message = relatedPositionIdsource;
}

RelatedPositionIDSource.prototype.value = function () {
  return this.message;
};


RelatedPositionIDSource.Keys = {
  POSITION_MAINTENANCE_REPORT_ID_POSMAINTRPTID: '1',
  TRANSFER_ID: '2',
};

RelatedPositionIDSource.Tag = '1863';

RelatedPositionIDSource.Type = 'INT';

RelatedPositionIDSource.Values = invert(RelatedPositionIDSource.Keys);

module.exports = RelatedPositionIDSource;