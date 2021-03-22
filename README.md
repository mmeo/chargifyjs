# chargifyjs

Full Chargifyjs examples for HTML/CSS front-ends.

## Install

1. Download files
2. Launch your localhost in terminal (example: `php -S localhost:3000` - or any other standard HTML opener)
3. Open your browser and go to `localhost:3000/examples.html`

## Testing
To test with your own Chargify account, replace the `publicKey` and `serverHost` in each `load.js` file.

## Example Images
![alt text](https://i.ibb.co/dmHxZ89/Screen-Shot-2021-02-08-at-6-04-26-AM.png)

## Basic CC Form
![alt text](https://i.ibb.co/3MqK1Cd/Screen-Shot-2021-02-08-at-6-07-02-AM.png)

## CC with Billing Address
![Screen Shot 2021-03-22 at 2 16 51 PM](https://user-images.githubusercontent.com/13340574/112059714-6cc19000-8b19-11eb-83b2-5d73be3de4a8.png)

## PayPal
![Screen Shot 2021-03-22 at 2 17 04 PM](https://user-images.githubusercontent.com/13340574/112059760-7f3bc980-8b19-11eb-8601-1436b28af5fb.png)

## ACH
![Screen Shot 2021-03-22 at 2 17 43 PM](https://user-images.githubusercontent.com/13340574/112059921-bc07c080-8b19-11eb-9aa0-fcdc3ea16edf.png)

## Gocardless
![Screen Shot 2021-03-22 at 2 17 52 PM](https://user-images.githubusercontent.com/13340574/112059936-c2963800-8b19-11eb-849c-6130c750aa32.png)

## Chargify.load
Within each example's code, look at the `methods/load.js` file for the full `load` json. Edit as needed.

## CSS
Within each `methods/load.js` file, you'll find example CSS within the `style` section. For easier CSS, explore the CSS examples inside each `index.html` file. For example, here: https://github.com/mmeo/chargifyjs/blob/main/chargifyjs_prod/cc-only/index.html#L29-L39. You can pass something like:

```
#cc_number iframe {
  width: 100% !important;
  background-color: red;
  something: else;
} 
```
