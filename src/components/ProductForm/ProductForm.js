import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = (props) => {
	const summary = (e) => {
		e.preventDefault();
		console.log('cardData', props.cardData);
	};

	return (
		<form>
			<OptionColor
				colors={props.colors}
				actionColor={props.actionColor}
				currentColor={props.currentColor}
			/>

			<OptionSize
				size={props.size}
				sizes={props.sizes}
				action={props.actionSize}
				additionalPrice={props.additionalPrice}
				currentSize={props.currentSize}
				price={props.price}
			/>
			<Button type={'submit'} onClick={summary} className={styles.button}>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	);
};
export default ProductForm;
