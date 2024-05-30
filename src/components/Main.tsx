import styles from './Main.module.css';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <>
      <main>
        <div className={styles['product-container']} id="products">
          <Link className={styles['product-card']} to="/details">
            <img
              className={styles['product-img']}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles['product-info']}>
              <span className={styles['product-title']}>iPad Pro 12.9</span>
              <span className={styles['product-description']}>Silver</span>
              <div className={styles['product-price-block']}>
                <span className={styles['product-price']}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles['product-info']}>
              <span className={styles['product-title']}>iPad Pro 12.9</span>
              <span className={styles['product-description']}>Silver</span>
              <div className={styles['product-price-block']}>
                <span className={styles['product-price']}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles['product-info']}>
              <span className={styles['product-title']}>iPad Pro 12.9</span>
              <span className={styles['product-description']}>Silver</span>
              <div className={styles['product-price-block']}>
                <span className={styles['product-price']}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles['product-info']}>
              <span className={styles['product-title']}>iPad Pro 12.9</span>
              <span className={styles['product-description']}>Silver</span>
              <div className={styles['product-price-block']}>
                <span className={styles['product-price']}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles['product-info']}>
              <span className={styles['product-title']}>iPad Pro 12.9</span>
              <span className={styles['product-description']}>Silver</span>
              <div className={styles['product-price-block']}>
                <span className={styles['product-price']}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles['product-info']}>
              <span className={styles['product-title']}>iPad Pro 12.9</span>
              <span className={styles['product-description']}>Silver</span>
              <div className={styles['product-price-block']}>
                <span className={styles['product-price']}>900000</span>
                <span className={styles['product-discount']}>50% Off</span>
              </div>
              <div className={styles['product-tax-policy']}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Main;