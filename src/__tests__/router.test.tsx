import '../../setupTests'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { setupStore } from '../store/reducers';
import App from '../components/App/App';
import CatalogProduct from '../pages/CatalogProduct/CatalogProduct';


describe('Test Router', () => {
	test('Test for route to cart', async () => {
		const store = setupStore();
		render(
			<Provider store={store}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);
		const shoppingCartLink = screen.getByTestId('shopping-cart-link');
		await waitFor(() => {
			userEvent.click(shoppingCartLink);
			expect(screen.getByTestId('shopping-cart-page')).toBeInTheDocument();
		})
	});

	test('Test for route to unknown path', async () => {
		const store = setupStore();

		await act(async () => render(
			<Provider store={store}>
				<MemoryRouter initialEntries={["/unknown-path"]}>
					<CatalogProduct />
				</MemoryRouter>
			</Provider>

		));

		expect(screen.getByTestId('main-page')).toBeInTheDocument();
	});
})
