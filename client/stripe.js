if(Meteor.isClient) {
  var closeModal = function(modal) {
    $(modal).modal('hide');
  };

  Template.stripe.plan = function() {
    return Session.get('plan');
  };

  Template.stripe.events({
    'click #stripe-modal .close' : function(e) {
      closeModal('#stripe-modal');
    },
    'click #stripe-modal .btn-default' : function(e) {
      closeModal('#stripe-modal');
    }
  })
}