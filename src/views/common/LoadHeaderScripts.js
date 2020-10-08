export const loadStripeJS = (callback) => {
  const existingScript = document.getElementById('stripeJS');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.id = 'stripeJS';
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};