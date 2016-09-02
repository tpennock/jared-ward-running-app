'use strict';

angular.module('jwrApp.blocks').component('jwrContact', {
    controllerAs: '$contact',
    templateUrl: 'components/contact/contact.html',
    bindings: {},
    controller: function JwrContactCtrl($log) {
        var $contact = this;

        //TODO: handle the form submit and the form data
        var submitContact = $('#submit-message'),
            message = $('#msg');

        submitContact.on('click', function(e){
            e.preventDefault();

            var $this = $(this);

            // $.ajax({
            //     type: "POST",
            //     url: 'contact.php',
            //     dataType: 'json',
            //     cache: false,
            //     data: $('#contact-form').serialize(),
            //     success: function(data) {
            //
            //         if(data.info !== 'error'){
            //             $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
            //             message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
            //         } else {
            //             message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
            //         }
            //     }
            // });
        });
    }
});
