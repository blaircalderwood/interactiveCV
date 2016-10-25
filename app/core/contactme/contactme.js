angular.module('contactme').component('contactme', {
    templateUrl: 'core/contactme/contactme_template.html',
    controller: [function ContactController() {

        var self = this;
        
    this.sendEmail = function () {
        emailjs.send("gmail", "contact_message", {
            name: this.contactName, email: this.contactEmail,
            message: this.contactMessage
        });

        this.contactName = '';
        this.contactEmail = '';
        this.contactMessage = 'Your message has been sent.';

        setTimeout(function () {
            self.contactMessage = '';
            self.$apply();
        }, 1000)
    }

}]});