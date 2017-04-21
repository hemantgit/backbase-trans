import DS from 'ember-data';

/*export default DS.JSONAPIAdapter.extend({
    urlForFindAll(transactions, snapshot) {
        "use strict";
        return '/data/transactions.json';
    }
});*/

export default DS.RESTAdapter.extend({
    urlForFindAll(transactions, snapshot) {
        "use strict";
        return '/data/transactions.json';
    }
});
