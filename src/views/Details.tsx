import styles from './Details.module.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Details() {
  return (
    <>
      <main>
        <div className={styles['details-container']}>
          <Cart />
          <div className={styles['sales-block']}>
            <h2 className={styles['sales-title']}>Ofertas de la semana</h2>
            <div id="product-container" className={styles['product-container']}>
              <Link className={styles['product-card']} to="/details">
                <img
                  className={styles['product-img']}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles['product-info']}>
                  <span className={styles['product-title']}>Kindle Paperwhite</span>
                  <span className={styles['product-description']}>Black</span>
                  <div className={styles['product-price-block']}>
                    <span className={styles['product-price']}>100000</span>
                    <span className={styles['product-discount']}>50% Off</span>
                  </div>
                  <div className={styles['product-tax-policy']}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </Link>
              <Link className={styles['product-card']} to="/details">
                <img
                  className={styles['product-img']}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles['product-info']}>
                  <span className={styles['product-title']}>Kindle Paperwhite</span>
                  <span className={styles['product-description']}>Black</span>
                  <div className={styles['product-price-block']}>
                    <span className={styles['product-price']}>100000</span>
                    <span className={styles['product-discount']}>50% Off</span>
                  </div>
                  <div className={styles['product-tax-policy']}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </Link>
              <Link className={styles['product-card']} to="/details">
                <img
                  className={styles['product-img']}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles['product-info']}>
                  <span className={styles['product-title']}>Kindle Paperwhite</span>
                  <span className={styles['product-description']}>Black</span>
                  <div className={styles['product-price-block']}>
                    <span className={styles['product-price']}>100000</span>
                    <span className={styles['product-discount']}>50% Off</span>
                  </div>
                  <div className={styles['product-tax-policy']}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;