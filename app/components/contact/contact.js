'use strict';

angular.module('jwrApp.blocks').component('jwrContact', {
    controllerAs: '$contact',
    templateUrl: 'components/contact/contact.html',
    bindings: {},
    controller: function JwrContactCtrl($log, $http) {
        var $contact = this;

        $contact.data = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        //TODO: this doesn't work
        $contact.submit = function (formData) {
            $log.info(formData);
            var payload = {
                'form_type': 'contact',
                'utf8': '✓',
                'contact[name]': formData.name,
                'contact[email]': formData.email,
                'contact[subject]': formData.subject,
                'contact[body]': formData.message
            }
            $http({
                method: 'POST',
                url: 'https://jared-ward-running-co.myshopify.com/contact'
            }, payload).then(
                function successCallback(response) {
                    $log.info('success: ', response);
                },
                function errorCallback(response) {
                    $log.info('error: ', response);
                }
            );
        };
    }
});
