interface DateModel {
    valueDate: Number;
}

interface AmountCurrencyModel {
    amount: Number;
    currency: string;
}

interface MerchantModel {
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
    transaction: TransactionObjectModel;
}

export interface TransactionResponseModel {
    data: TransactionModel[];
}
