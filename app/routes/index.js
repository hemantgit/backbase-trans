import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        "use strict";
        return this.get('store').findAll('transactions');
    }
  /*  beforeModel() {
        "use strict";
        this.replaceWith('transactions');
    }*/
});
