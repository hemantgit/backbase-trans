import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
     amount:'',

     init(){
        "use strict";
         this._super();
         this.initialize();

     },
    initialize() {
        this.transList().then((data) => {

            this.set('trans', data);

           // let amount = this.set('amount',data.amount);
            //console.log("The amount:", amount);
        });
    },

    transList(){
        const store = this.get('store');


        return store.findAll('transactions');
    },


});
