var invert = require('invert-obj');

function PartySubIDType (partySubIdtype) {
  this.message = partySubIdtype;
}

PartySubIDType.prototype.value = function () {
  return this.message;
};


PartySubIDType.Keys = {
  FIRM: '1',
  PERSON: '2',
  SYSTEM: '3',
  APPLICATION: '4',
  FULL_LEGAL_NAME_OF_FIRM: '5',
  POSTAL_ADDRESS: '6',
  PHONE_NUMBER: '7',
  EMAIL_ADDRESS: '8',
  CONTACT_NAME: '9',
  SECURITIES_ACCOUNT_NUMBER: '10',
  REGISTRATION_NUMBER: '11',
  REGISTERED_ADDRESS: '12',
  REGULATORY_STATUS: '13',
  REGISTRATION_NAME: '14',
  CASH_ACCOUNT_NUMBER: '15',
  BIC: '16',
  CSD_PARTICIPANT_MEMBER_CODE: '17',
  REGISTERED_ADDRESS_1: '18',
  FUND_ACCOUNT_NAME: '19',
  TELEX_NUMBER: '20',
  FAX_NUMBER: '21',
  SECURITIES_ACCOUNT_NAME: '22',
  CASH_ACCOUNT_NAME: '23',
  DEPARTMENT: '24',
  LOCATION_DESK: '25',
  POSITION_ACCOUNT_TYPE: '26',
  SECURITY_LOCATE_ID: '27',
  MARKET_MAKER: '28',
  ELIGIBLE_COUNTERPARTY: '29',
  PROFESSIONAL_CLIENT: '30',
  LOCATION: '31',
  EXECUTION_VENUE: '32',
  CURRENCY_DELIVERY_IDENTIFIER: '33',
  ADDRESS_CITY: '34',
  ADDRESS_STATE_PROVINCE: '35',
  ADDRESS_POSTAL_CODE: '36',
  ADDRESS_STREET: '37',
  ADDRESS_COUNTRY: '38',
  ISO_COUNTRY_CODE: '39',
  MARKET_SEGMENT: '40',
  CUSTOMER_ACCOUNT_TYPE: '41',
  OMNIBUS_ACCOUNT: '42',
  FUNDS_SEGREGATION_TYPE: '43',
  GUARANTEE_FUND: '44',
  SWAP_DEALER: '45',
  MAJOR_PARTICIPANT: '46',
  FINANICAL_ENTITY: '47',
  U_S_PERSON: '48',
  REPORTING_ENTITY_INDICATOR: '49',
  ELECTED_CLEARING_REQUIREMENT_EXCEPTION: '50',
  BUSINESS_CENTER: '51',
  REFERENCE_TEXT: '52',
  SHORT_MARKING_EXEMPT_ACCOUNT: '53',
  PARENT_FIRM_IDENTIFIER: '54',
  PARENT_FIRM_NAME: '55',
  DEAL_IDENTIFIER: '56',
  SYSTEM_TRADE_IDENTIFIER: '57',
  SYSTEM_TRADE_SUB_IDENTIFIER: '58',
  FUTURES_COMMISSION_MERCHANT_CODE: '59',
  DELIVERY_TERMINAL_CUSTOMER_ACCOUNT_CODE: '60',
  VOLUNTARY_REPORTING_ENTITY: '61',
  REPORTING_OBLIGATION_JURISDICTION: '62',
  VOLUNTARY_REPORTING_JURISDICTION: '63',
  COMPANY_ACTIVITIES: '64',
  EUROPEAN_ECONOMIC_AREA_DOMICILED: '65',
  CONTRACT_LINKED_TO_COMMERCIAL_OR_TREASURY_FINANCING_FOR_THIS_COUNTERPARTY: '66',
  CONTRACT_ABOVE_CLEARING_THRESHOLD_FOR_THIS_COUNTERPARTY: '67',
  VOLUNTARY_REPORTING_PARTY: '68',
  END_USER: '69',
  LOCATION_OR_JURISDICTION: '70',
  DERIVATIVES_DEALER: '71',
  DOMICILE: '72',
  EXEMPT_FROM_RECOGNITION: '73',
};

PartySubIDType.Tag = '803';

PartySubIDType.Type = 'INT';

PartySubIDType.Values = invert(PartySubIDType.Keys);

module.exports = PartySubIDType;