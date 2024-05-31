import styles from './Cart.module.css';

interface CartProps {
  id: string;
  title: string;
  price: string;
  images: string[];
  colors: string[];
  description: string;
}

const Cart: React.FC<CartProps> = ({ id, title, price, images, colors, description }) => {
  return (
    <>
      <div id="details" className={styles['columns-container']}>
        <section className={styles['product-images-block']}>
          <div className={styles['product-images']}>
            {images.map((image)=>(
              <img
                className={styles['mini-img']}
                src={image}
                alt={title}
              />
            ))}
          </div>
          <img
            className={styles['big-img']}
            id="big-img"
            src={images[0]}
            alt={title}
          />
        </section>
        <div className={styles['product-description-block']}>
          <h1 className={styles['product-title']}>{title}</h1>
          <form className={styles['product-selector']}>
            <fieldset className={styles['product-fieldset']}>
              <label className={styles['product-label']} htmlFor="color">Color</label>
              <select
                className={styles['product-select']}
                id="color"
              >
                {colors.map((color)=>(
                  <option value={color}>{color}</option>
                ))}
              </select>
            </fieldset>
          </form>
          <div className={styles['product-description']}>
            <span className={styles['product-label']}>Descripción</span>
            <p>
              {description}
            </p>
          </div>
        </div>
        <div className={styles['product-checkout-block']}>
          <div className={styles['checkout-container']}>
            <span className={styles['checkout-total-label']}>Total:</span>
            <h2 id="price" className={styles['checkout-total-price']}>${price}</h2>
            <p className={styles['checkout-description']}>
              Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
              50711 haciendo la solicitud en AFIP.
            </p>
            <ul className={styles['checkout-policy-list']}>
              <li>
                <span className={styles['policy-icon']}>
                  <img src="../../public/truck.png" alt="Truck"/>
                </span>
                <span className={styles['policy-desc']}
                  >Agrega el producto al carrito para conocer los costos de
                  envío</span
                >
              </li>
              <li>
                <span className={styles['policy-icon']}>
                  <img src="../../public/plane.png" alt="Plane"/>
                </span>
                <span className={styles['policy-desc']}
                  >Recibí aproximadamente entre 10 y 15 días hábiles,
                  seleccionando envío normal</span
                >
              </li>
            </ul>
            <div className={styles['checkout-process']}>
              <div className={styles['top']}>
                <input id={id} type="number" min="1" value="1" />
                <button type="button" className={styles['cart-btn']}>
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;