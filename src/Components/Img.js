import ImageDesktop from './../../src/image-product-desktop.jpg';
import ImageMobile from './../../src/image-product-mobile.jpg';

import classes from './Img.module.css';

const Img = () => {
  return (
    <div>
      <img className={classes.imgM} src={ImageMobile}></img>
      <img className={classes.imgD} src={ImageDesktop}></img>
    </div>
  );
};

export default Img;
