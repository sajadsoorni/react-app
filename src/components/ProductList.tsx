import { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products');

    setProducts(['Clothing', 'Household']);
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
