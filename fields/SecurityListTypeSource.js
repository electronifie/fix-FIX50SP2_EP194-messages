var invert = require('invert-obj');

function SecurityListTypeSource (securityListTypeSource) {
  this.message = securityListTypeSource;
}

SecurityListTypeSource.prototype.value = function () {
  return this.message;
};


SecurityListTypeSource.Keys = {
  'ICB_PUBLISHED_BY_DOW_JONES_AND_FTSE_WWW_ICBENCHMARK_COM': '1',
  'NAICS_WWW_CENSUS_GOV_NAICS_OR_WWW_NAICS_COM_': '2',
  'GICS_PUBLISHED_BY_STANDARDS_POOR': '3',
};

SecurityListTypeSource.Tag = '1471';

SecurityListTypeSource.Type = 'INT';

SecurityListTypeSource.Values = invert(SecurityListTypeSource.Keys);

module.exports = SecurityListTypeSource;