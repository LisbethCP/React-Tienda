import styles from './Details.module.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import products from '../assets/products';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Details() {
  const { id } = useParams();
  const product = products.find((p) => 
    p.id == id);
  return (
    <>
      <main>
        <div className={styles['details-container']}>
          <Cart id={product.id} title={product.title} price={product.price} images={product.images} colors={product.colors} description={product.description}/>
          <div className={styles['sales-block']}>
            <h2 className={styles['sales-title']}>Ofertas de la semana</h2>
            <div id="product-container" className={styles['product-container']}>
              <ProductCard
                id={products[5].id}
                title={products[5].title}
                price={products[5].price}
                colors={products[5].colors[0]}
                images={products[5].images[0]}
              />
              <ProductCard
                id={products[12].id}
                title={products[12].title}
                price={products[12].price}
                colors={products[12].colors[0]}
                images={products[12].images[0]}
              />
              <ProductCard
                id={products[7].id}
                title={products[7].title}
                price={products[7].price}
                colors={products[7].colors[0]}
                images={products[7].images[0]}
              />            
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;