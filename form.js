$(document).ready(function() {
    $('#submit').on('click', function(event) {
      let name = $('#name').val()
      let email = $('#email').val()
      let phone = $('#phone').val()
      let required = [name, email, phone]
  
      for (let i = 0; i < required.length; i++) {
        if (required[i] === '') {
          $('#message').html('Please Fill Out Required Fields').addClass('warning')
          $('label').eq(i).addClass('warning')
        } else {
          $('label').eq(i).removeClass('warning')
        }
      }
  
      if ($('label').filter('.warning').length === 0) {
        $('#form').remove()
        $('#pre-form').html('<h2>Thanks for your feedback!</h2>')
      }
    })
  })
  

