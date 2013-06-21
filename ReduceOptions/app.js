(function(){
  return {
    appID:  'https://github.com/zendesk/widgets/tree/master/ConditionalFieldsApp',
    requiredProperties: [],
    events: {
      'app.activated':  'updateOptions',
      'ticket.assignee.group.id.changed': 'updateOptions'
    },
    updateOptions: function(res) {
        var current = this.ticket().assignee().group().name();
        var matcher = /.*/;
        if (current == 'Customer') {
          matcher = /\(Prod\)/;
        } else if (current == 'User') {
          matcher = /\(Plat\)/;
        } else if (current == 'Quality') {
          matcher = /\(Prod\)/;
        } else if (current == 'Tech') {
          matcher = /\(Tech\)/;
        }
        this.$(this.ticketFields('custom_field_20267206').options()).each(function() {
            if (this.label() == '-' || this.label().match(matcher)) {
                this.show();
            } else {
                this.hide();
            }
        });
    }
  };
}());