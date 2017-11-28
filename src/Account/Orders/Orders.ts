import {ClosedOrders, IClosedOrders} from './ClosedOrders';
import {IOpenOrders, OpenOrders} from './OpenOrders';
import {IQueryOrders, QueryOrders} from './QueryOrders';
import {Client} from '../../Util/DefaultClient';
import {CancelOrder, IOrderCancel} from './CancelOrder';
import {AddOrder, IOrderAdd} from './AddOrder';

export class Orders extends Client {

    private ClosedOrders: ClosedOrders;
    private OpenOrders: OpenOrders;
    private QueryOrders: QueryOrders;
    private CancelOrder: CancelOrder;
    private AddOrder: AddOrder;

    constructor(opts) {
        super(opts);

        /**
         * Mount apis
         */
        this.ClosedOrders = new ClosedOrders({}, this.client);
        this.OpenOrders = new OpenOrders({}, this.client);
        this.QueryOrders = new QueryOrders({}, this.client);
        this.CancelOrder = new CancelOrder({}, this.client);
        this.AddOrder = new AddOrder({}, this.client);
    }

    query(opts: IQueryOrders): Promise<any> {
        return this.QueryOrders.get(opts);
    }

    getClosed(opts: IClosedOrders): Promise<any> {
        return this.ClosedOrders.get(opts);
    }

    getOpen(opts: IOpenOrders): Promise<any> {
        return this.OpenOrders.get(opts);
    }

    add(order: IOrderAdd) {
        return this.AddOrder.add(order);
    }

    cancel(opts: IOrderCancel) {
        return this.CancelOrder.cancel(opts);
    }

}
