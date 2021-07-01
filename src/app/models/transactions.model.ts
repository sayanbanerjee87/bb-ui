interface DateModel {
    valueDate: Number;
}

export interface AmountCurrencyModel {
    amount: Number;
    currencyCode: string;
}

export interface MerchantModel {
    name: string;
    accountNumber: string;
}

export interface TransactionModel {
    amountCurrency: AmountCurrencyModel;
    type: string;
    creditDebitIndicator: string;
    merchant: MerchantModel;
}

export interface TransactionObjectModel {
    categoryCode: string;
    dates: DateModel;
    transaction: TransactionModel;
}

export interface TransactionResponseModel {
    data: TransactionModel[];
}
