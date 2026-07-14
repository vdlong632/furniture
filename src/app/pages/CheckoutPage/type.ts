const intake = (label: string) => ({ label, value: label });

export const COUNTRY_OPTIONS = [intake('East'), intake('West'), intake('South'), intake('North')];

export const ORDER_OPTIONS = [
  {
    label: 'Direct Bank Transfer',
    value: 'Direct Bank Transfer',
    detail:
      'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'
  },
  {
    label: 'Cash On Delivery',
    value: 'Cash On Delivery',
    detail:
      'Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.'
  }
];
