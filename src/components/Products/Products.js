import {useState} from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import data from '../../data/products';
import { useMemo } from 'react';


const Products = () => {
	const [products] = useState(productsData);
	console.log(data);
	return (
		<section>
			{products.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</section>
	);
};
export const color = productsData.map(({colors}) => colors);

export default Products;
