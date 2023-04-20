import '../../setupTests';
import { filterByType, sortProducts } from '../components/UX/ProductTable/utils';
import goodsForTest from '../__fixtures__/goodsForText';
import resultFilterByType from '../__fixtures__/resultFilterByType';
import resultSortProducts from '../__fixtures__/resultSortProducts';


describe('Test Utils', () => {
	test('Util filterByType', async () => {
		expect(filterByType(goodsForTest, 'Средство для стирки')).toEqual(resultFilterByType);
	});

	test('Util filterByType, no goods', async () => {
		expect(filterByType(goodsForTest, 'Неизвестный тип средства')).toEqual([]);
	});

	test('Util sortProducts', async () => {
		const sorted = sortProducts(goodsForTest, 'sortByNameAbc');
		expect(sorted).toEqual(resultSortProducts);
	})
})
