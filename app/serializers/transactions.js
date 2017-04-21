import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    modelNameFromPayloadKey(payloadKey) {
        if (payloadKey === "transactions") {
            return payloadKey;
        } else {
            return this._super(payloadKey);
        }
    }
});
