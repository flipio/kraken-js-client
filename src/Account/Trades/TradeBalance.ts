import {KrakenEndoints} from '../../Clients/KrakenEndpoints';
import {IOtp} from '../../Clients/HttpClient';
import {Client} from '../../Util/DefaultClient';

export interface IBalance {
    eb: string,
    tb: string,
    m: string,
    n: string,
    c: string,
    v: string,
    e: string,
    mf: string,
    ml: string
}

export class BalanceInfo {

    private _balance: IBalance;

    constructor(balance: IBalance) {
        this._balance = balance;
    }

    getRawData(): IBalance {
        return this._balance;
    }

    getEquivalentBalance() {
        return this._balance.eb;
    }

    getTradeBalance() {
        return this._balance.tb;
    }

    getMarginAmount() {
        return this._balance.m;
    }

    getUnrealizedNetProfit() {
        return this._balance.n;
    }

    getCostBasis() {
        return this._balance.c;
    }

    getCurrentValuation() {
        return this._balance.v;
    }

    getEquity() {
        return this._balance.e;
    }

    getFreeMargin() {
        return this._balance.mf;
    }

    getMarginLevel() {
        return this._balance.ml;
    }

}

export interface ITradeBalance extends IOtp {
    aclass?: string; //asset class default 'currency'
    asset?: string; // base asset used to determine balance (default = ZUSD)
}

export class TradeBalance extends Client {


    constructor(opts, client?) {
        super(opts, client);
    }

    get(opts: ITradeBalance, raw: boolean): Promise<BalanceInfo | any> {
        return new Promise((resolve, reject) => {

            this.client.post(KrakenEndoints.TradeBalance, opts)
                .then((d: IBalance) => {
                    resolve(raw ? d : new BalanceInfo(d));
                })
                .catch(reject);

        });
    }
}
