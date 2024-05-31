/* /src/components/ProductCard.tsx */
import styles from "./ProductCard.module.css"
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  images: string;
  colors: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, images, colors }) => {
  return (
    <>
      <Link className={styles['product-card']} to={`/details/${id}`}>  
        <img
          className={styles['product-img']} 
          src={images}
          alt={title}
        />
        <div className={styles['product-info']}>
          <span className={styles['product-title']}>{title}</span>
          <span className={styles['product-description']}>{colors}</span>
          <div className={styles['product-price-block']}>
            <span className={styles['product-price']}>{price}</span>
            <span className={styles['product-discount']}>50% Off</span>
          </div>
          <div className={styles['product-tax-policy']}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
