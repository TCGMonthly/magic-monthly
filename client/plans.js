if(Meteor.isClient) {
  var selectedEl = null;

  var selectPlan = function(el, plan) {
    var purchaseButton = $('.plans .btn-primary');
    var currentPlan = Session.get('plan');
    $(selectedEl).removeClass('selected');
    if(currentPlan && currentPlan.id === plan.id) {
      Session.set('plan', null);
      purchaseButton.attr('disabled', 'disabled');
      return;
    }
    $(el).addClass('selected');
    purchaseButton.removeAttr('disabled');
    selectedEl = el;
    Session.set('plan', plan);
  };

  Template.plans.rendered = function() {
    $('.card:eq(2)').click();
  };

  Template.plans.plans = function () {
    var data = new Array();
    data.push({
      id : 0,
      name : '3 Packs of Cards',
      price : '12.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 3,
      cardsPerPack : 15
    });
    data.push({
      id : 1,
      name : '6 Packs of Cards',
      price : '24.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 6,
      cardsPerPack : 15
    });
    data.push({
      id : 2,
      name : '12 Packs of Cards',
      price : '44.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 12,
      cardsPerPack : 15
    });
    data.push({
      id : 3,
      name : 'Whole Box',
      price : '109.99',
      type : 'Monthly Subscription',
      description : 'Some description of the subscription',
      packs : 36,
      cardsPerPack : 15
    });
    return data;
  };

  Template.plans.events({
    'click .card' : function(e) {
      selectPlan(e.currentTarget, this);
    }
  })
}