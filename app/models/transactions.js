import DS from 'ember-data';

export default DS.Model.extend({
    amount: DS.attr('string'),
    categoryCode: DS.attr('string'),
    merchant: DS.attr('string'),
    merchantLogo: DS.attr(),
    transactionDate: DS.attr('string'),
    transactionType: DS.attr('string')


});
