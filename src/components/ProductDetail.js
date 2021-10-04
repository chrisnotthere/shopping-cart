import React, {useState, useEffect} from 'react';

function ProductDetail({match}) {
  useEffect(() => {
    fetchProduct();
  }, []);

  const [product, setProduct] = useState({
    // to fix 'sprites is not defined'
    sprites: {}
  });

  const fetchProduct = async () => {
    const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
    const product = await fetchItem.json();

    setProduct(product);
    console.log(product);

  };

  return (
    <div className="Products">
      <h1>{product.name}</h1>
      <img src={product.sprites.front_default} alt='' width='150px' />
    </div>
  );
}

export default ProductDetail;
