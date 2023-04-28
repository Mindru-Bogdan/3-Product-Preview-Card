import Cart from './../../src/icon-cart.svg';

import classes from './Details.module.css';

const Details = () => {
  return (
    <div className={classes.body}>
      <h4>PERFUME</h4>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p className={classes.paragraph}>
        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </p>
      <div>
        <h2>$149.99</h2>
        <h5>$169.99</h5>
      </div>
      <div className={classes.button}>
        <img src={Cart}></img> Add to Cart
      </div>
    </div>
  );
};

export default Details;
