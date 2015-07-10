var invert = require('invert-obj');

function RegulatoryReportType (regulatoryReportType) {
  this.message = regulatoryReportType;
}

RegulatoryReportType.prototype.value = function () {
  return this.message;
};


RegulatoryReportType.Keys = {
  REAL_TIME: '0',
  PRIMARY_ECONOMIC_TERMS: '1',
  SNAPSHOT: '2',
  CONFIRMATION: '3',
  COMBINATION_OF_RT_AND_PET: '4',
  COMBINATION_OF_PET_AND_CONFIRMATION: '5',
  COMBINATION_OF_RT_PET_AND_CONFIRMATION: '6',
  POST_TRADE_VALUATION: '7',
  VERIFICATION: '8',
  POST_TRADE_EVENT: '9',
  POST_TRADE_EVENT_RT_REPORTABLE: '10',
};

RegulatoryReportType.Tag = '1934';

RegulatoryReportType.Type = 'INT';

RegulatoryReportType.Values = invert(RegulatoryReportType.Keys);

module.exports = RegulatoryReportType;