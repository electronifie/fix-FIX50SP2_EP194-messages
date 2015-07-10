var invert = require('invert-obj');

function SecurityIDSource (securityIdsource) {
  this.message = securityIdsource;
}

SecurityIDSource.prototype.value = function () {
  return this.message;
};


SecurityIDSource.Keys = {
  CUSIP: '1',
  SEDOL: '2',
  QUIK: '3',
  ISIN_NUMBER: '4',
  RIC_CODE: '5',
  ISO_CURRENCY_CODE: '6',
  ISO_COUNTRY_CODE: '7',
  EXCHANGE_SYMBOL: '8',
  CONSOLIDATED_TAPE_ASSOCIATION: '9',
  BLOOMBERG_SYMBOL: 'A',
  WERTPAPIER: 'B',
  DUTCH: 'C',
  VALOREN: 'D',
  SICOVAM: 'E',
  BELGIAN: 'F',
  COMMON: 'G',
  CLEARING_HOUSE_CLEARING_ORGANIZATION: 'H',
  ISDA_FPML_PRODUCT_SPECIFICATION: 'I',
  OPTION_PRICE_REPORTING_AUTHORITY: 'J',
  ISDA_FPML_PRODUCT_URL: 'K',
  LETTER_OF_CREDIT: 'L',
  MARKETPLACE_ASSIGNED_IDENTIFIER: 'M',
  MARKIT_RED_ENTITY_CLIP: 'N',
  MARKIT_RED_PAIR_CLIP: 'P',
  CFTC_COMMODITY_CODE: 'Q',
  ISDA_COMMODITY_REFERENCE_PRICE: 'R',
  BLOOMBERG_OPEN_SYMBOLOGY_BBGID: 'S',
  LEGAL_ENTITY_IDENTIFIER: 'T',
  SYNTHETIC: 'U',
};

SecurityIDSource.Tag = '22';

SecurityIDSource.Type = 'STRING';

SecurityIDSource.Values = invert(SecurityIDSource.Keys);

module.exports = SecurityIDSource;