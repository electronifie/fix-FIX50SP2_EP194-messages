var invert = require('invert-obj');

function OwnerType (ownerType) {
  this.message = ownerType;
}

OwnerType.prototype.value = function () {
  return this.message;
};


OwnerType.Keys = {
  INDIVIDUAL_INVESTOR: '1',
  PUBLIC_COMPANY: '2',
  PRIVATE_COMPANY: '3',
  INDIVIDUAL_TRUSTEE: '4',
  COMPANY_TRUSTEE: '5',
  PENSION_PLAN: '6',
  CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT: '7',
  TRUSTS: '8',
  FIDUCIARIES: '9',
  NETWORKING_SUB_ACCOUNT: '10',
  NON_PROFIT_ORGANIZATION: '11',
  CORPORATE_BODY: '12',
  NOMINEE: '13',
  INSTITUTIONAL_CUSTOMER: '14',
  COMBINED: '15',
  MEMBER_FIRM_EMPLOYEE_OR_ASSOCIATED_PERSON: '16',
  MARKET_MAKING_ACCOUNT: '17',
  PROPRIETARY_ACCOUNT: '18',
  NON_BROKER_DEALER: '19',
  UNKNOWN_BENEFICIAL_OWNER_TYPE: '20',
  ERROR_ACCOUNT_OF_FIRM: '21',
};

OwnerType.Tag = '522';

OwnerType.Type = 'INT';

OwnerType.Values = invert(OwnerType.Keys);

module.exports = OwnerType;