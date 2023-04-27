import '../../setupTests';
import { filterByType, sortProducts } from '../components/CatalogProductComponents/TableProduct/utils';
import testGoods from '../__fixtures__/testGoods';
import filterByTypeResult from '../__fixtures__/filterByTypeResult';
import sortProductsResult from '../__fixtures__/sortProductsResult';


describe('Test Utils', () => {
	test('Util filterByType', async () => {
		expect(filterByType(testGoods, 'Средство для стирки')).toEqual(filterByTypeResult);
	});

	test('Util filterByType, no goods', async () => {
		expect(filterByType(testGoods, 'Неизвестный тип средства')).toEqual([]);
	});

	test('Util sortProducts', async () => {
		const sorted = sortProducts(testGoods, 'sortByNameAbc');
		expect(sorted).toEqual(sortProductsResult);
	})
})
