if(Meteor.isClient) {
  Template.plans.plans = function () {
    var data = new Array();
    data.push({
      name : '3 Packs of Cards',
      price : '12.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 3,
      cardsPerPack : 15
    });
    data.push({
      name : '6 Packs of Cards',
      price : '24.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 6,
      cardsPerPack : 15
    });
    data.push({
      name : '12 Packs of Cards',
      price : '44.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 12,
      cardsPerPack : 15
    });
    data.push({
      name : 'Whole Box',
      price : '109.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 36,
      cardsPerPack : 15
    });
    return data;
  };
}