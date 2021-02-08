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
    publicKey: 'chjs_cw9n84x9gvn37dj3z6dtf79z',
    serverHost: 'https://demo-direct-debit.chargify.com',
    type: 'gocardless',
    selectorForGoCardlessHeader: '#gocardless-header',
    selectorForGoCardlessFooter: '#gocardless-footer',
    selectorForToggleIbanOrLocalDetails: '#gocardless-toggle-iban',
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
            label: 'First Name on Account',
            placeholder: 'John',
            required: true,
            message: 'Invalid First Name',
            maxlength: '30'
        },
        lastName: {
            selector: '#last_name',
            label: 'Last Name on Account',
            placeholder: 'Smith',
            required: true,
            message: 'Invalid Last Name',
            maxlength: '30'
        },
        bankName: { selector: '#bank_name' },
        bankIban: { selector: '#bank_iban' },
        branchCode: { selector: '#branch_code' },
        routingNumber: { selector: '#routing_number' },
        accountNumber: { selector: '#account_number' },
        accountHolderType: { selector: '#account_holder_type' },
        address: {
            selector: '#billing_address',
            label: 'Address',
            placeholder: '1234 Hill St',
            required: true,
            message: 'Invalid Address',
            maxlength: '70'
        },
        address2: {
            selector: '#billing_address2',
            label: 'Address 2',
            placeholder: '1234 Hill St',
            required: false,
            message: 'Invalid Address 2',
            maxlength: '70'
        },
        city: {
            selector: '#billing_city',
            label: 'City',
            placeholder: 'Austin',
            required: true,
            message: 'Invalid City',
            maxlength: '30'
        },
        zip: {
            selector: '#billing_zip',
            label: 'Zip Code',
            placeholder: '10001',
            required: true,
            message: 'Invalid Zip',
            maxlength: '5'
        },
        country: {
            selector: '#billing_country',
            label: 'Country',
            placeholder: 'Select...',
            required: true,
            message: 'Invalid Country',
            maxlength: '2'
        },
        state: {
            selector: '#billing_state',
            label: 'State or Province',
            placeholder: 'Select...',
            required: true,
            message: 'Invalid State',
            maxlength: '2'
        }
    }
});