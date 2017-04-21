import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    isPending: '',
    samount:'',
    smerchant:'Georgia Power Electric Company',
    amount: '',
    merchant: 'Georgia Power Electric Company',

    init(){
        "use strict";
        this._super();
        this.set('isPending', false);
    },

    actions:{
        submitForm: function() {
            "use strict";
            console.log("Hello World");

      let formmerchant = this.get('smerchant');
      console.log("The Merchant Is: ",formmerchant );
      let formamount = this.get('samount');
            this.set('merchant', formmerchant);
            this.set('amount', formamount);




            this.toggleProperty('isPending');
        },

        addTrans: function () {
            var d = new Date();
            var today = d.toISOString();
            console.log("Todays date is:" + today);
            var fdate = formatDate(today);
            console.log("The ISO Date is: ", fdate);
             var formatCurrency = this.get('amount');
             var currency = parseFloat(Math.round(formatCurrency * 100) / 100).toFixed(2);

            var store = this.get('store');
              var newTrans = store.createRecord('transactions', {
             amount: currency,
             categoryCode: '#FFFF00',
             merchant: this.get('merchant'),
             merchantLogo: '',
             transactionDate: fdate,
             transactionType: 'Online Transfer'

             });
            this.toggleProperty('isPending');
        },



    },




});

//Formats date into a string of my guess of the date being in ISO8601 format
function formatDate(today) {
    "use strict";
    today = today.replace(/\D/g," ");

    var dtcomps = today.split(" ");

    let  tdate = dtcomps[0] + dtcomps[1] + dtcomps[2] + dtcomps[3] + dtcomps[4] +  dtcomps[5] + dtcomps[6];

    return tdate;

}
