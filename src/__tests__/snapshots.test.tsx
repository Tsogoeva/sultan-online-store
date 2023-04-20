import renderer from 'react-test-renderer';
import Button from '../components/UX/Button/Button';
import NoSuchProducts from '../components/UX/NoSuchProducts/NoSuchProducts';
import cartIcon from '../components/UX/ButtonToCartFromProduct/assets/mini-cart-icon.svg';

describe('Snapshots renders', () => {

	test('render NoSuchProducts component', () => {
		const tree = renderer
			.create(<NoSuchProducts />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('render Button component', () => {
		const tree = renderer
			.create(<Button text={'Тест'} icon={cartIcon} size={'big'} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
})
