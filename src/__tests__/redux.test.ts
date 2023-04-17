import '../../setupTests';
import _ from 'lodash';
import goodReducer,
{
	initialState,
	setCurrentPage,
	toggleCurrentType
} from '../store/goodSlice';


describe('Test Reducers', () => {
	test('Reducer setCurrentPage', async () => {
		expect(
			_.get(
				goodReducer(initialState, setCurrentPage(2)),
				['pagination', 'currentPage'],
			)
		).toBe(2);
	})

	test('Reducer toggleCurrentType', async () => {
		expect(
			_.get(
				goodReducer(initialState, toggleCurrentType('Средство для мытья посуды')),
				['form', 'currentType'],
			)
		).toBe('Средство для мытья посуды');
	})
});
