var letsConnectView = {
    init: function() {
        this.$element = $('#lets-connect');
        this.contactsView = new ContactsView(this.$element.find('#footerContacts'));
        this.render();
    },
    render: function() {
        this.contactsView.render();
    }
};
