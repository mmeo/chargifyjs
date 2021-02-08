var chargify = new Chargify();

//**********
//AVAILABLE STYLES
//https://developer.chargify.com/content/chargify-js/configurations.html#styles
//**********

//global css styles
// field
// input   
// label
// message

//available css styles within each global style
// backgroundColor
// paddingTop, paddingBottom
// border (1px dashed #ffc0cb57), borderRadius
// color
// fontSize
// maxWidth

//**********
//END AVAILABLE STYLES
//**********

chargify.load({
  publicKey: 'chjs_2fftvv4sbjbdwfnhmrcnn9fw',
  serverHost: 'https://chargify-sandbox-chargifyjs-paypal.chargify.com',
  type: 'pay_pal',
  selectorForPayPalButton: '#pay-pal',
  selector: '#chargify-form',
  style: {
        field: {
            borderRadius: '.25rem',
            maxWidth: '100%'
        },
        input: {
            fontSize: '16px',
            border: '1px solid #ced4da',
            width: '100%',
            padding: '8px 18px'
        },
        label: {
            backgroundColor: '#ffffff',
            paddingTop: '2px',
            paddingBottom: '1px',
            fontSize: '16px',
            fontWeight: '400'
        },
        message: { 
          paddingTop: '2px', 
          paddingBottom: '1px' 
        }
    },
    fields: {
        firstName: {
            selector: '#first_name',
            label: 'First Name on Paypal Account',
            placeholder: 'John',
            required: true,
            message: 'Invalid First Name',
            maxlength: '30'
        },
        lastName: {
            selector: '#last_name',
            label: 'Last Name on Paypal Account',
            placeholder: 'Smith',
            required: true,
            message: 'Invalid Last Name',
            maxlength: '30'
        }
  }
}, 
{
  onPayPalAuthorized: function() {
    chargify.token(
      document.querySelector('#chargify-form'),
      function success(token, message) {
        // host will write token in hidden input
        document.querySelector('#chargify-token').value = token;
      },
      function error(err) {
        //console.log('{host} token ERROR - err: ', err);

        //define error message (occurs before token generation attempt)
        if (err.message === undefined) { var message = ""; }
        else { var message = err.message; }

        //define actual error message (occurs after token generation attempt)
        if (err.errors === undefined) { var chargify_errors = ""; }
        else { var chargify_errors = err.errors; }

        //construct error message to display
        $("#chargify-error-message").show().text(message + " " + chargify_errors);
      
      }
    );
  }
});