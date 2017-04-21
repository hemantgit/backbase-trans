import Ember from 'ember';

export function eq(params /*, hash*/) {

  const eq = (params)=> params[0] === params[1];
  return eq;
}



export default Ember.Helper.helper(eq);
