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

// chargify.load({
//         selector: '#chargify-form',
//         publicKey: 'chjs_hy39j8rc2krnhdx9db73ynmb',
//         type: 'card',
//         serverHost: 'https://demo-integrations2.chargify.com'
//     });

chargify.load({
    publicKey: 'chjs_hy39j8rc2krnhdx9db73ynmb',
    serverHost: 'https://demo-integrations2.chargify.com',
    type: 'card',
    hideCardImage: false,
    optionalLabel: ' ',
    requiredLabel: '*',
    addressDropdowns: true,
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
            label: 'First Name on Card',
            placeholder: 'John',
            required: true,
            message: 'Invalid First Name',
            maxlength: '30'
        },
        lastName: {
            selector: '#last_name',
            label: 'Last Name on Card',
            placeholder: 'Smith',
            required: true,
            message: 'Invalid Last Name',
            maxlength: '30'
        },
        number: {
            selector: '#cc_number',
            label: 'Card Number',
            placeholder: 'Card Number',
            message: 'Invalid Card',
            required: true,
            style: {
              input: {
                padding: '8px 48px'
              }
            }
        },
        month: {
            selector: '#cc_month',
            label: '',
            placeholder: 'MM',
            message: 'Invalid Month',
            required: true
        },
        year: {
            selector: '#cc_year',
            label: '',
            placeholder: 'YYYY',
            message: 'Invalid Year',
            required: true
        },
        cvv: {
            selector: '#cc_cvv',
            label: 'CVC',
            placeholder: 'CVC',
            required: false,
            message: 'Invalid CVC',
            required: true
        }
    }
});