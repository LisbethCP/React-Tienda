import styles from './Main.module.css';
import ProductCard from './ProductCard';
import products from '../assets/products';

const Main = () => {
  return (
    <>
      <main>
        <div className={styles['product-container']} id="products">          
          {products.map((each) => (
          <ProductCard
            id={each.id}
            title={each.title}
            price={each.price}
            colors={each.colors[0]}
            images={each.images[0]}
          />
          ))}
        </div>
      </main>
    </>
  );
}

export default Main;