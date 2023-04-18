import '../../setupTests';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { setupStore } from '../store/reducers';
import Cart from '../pages/Cart/Cart';
import ThanksModal from '../components/UX/ThanksModal/ThanksModal';
import ProductCatalog from '../pages/ProductCatalog/ProductCatalog';
import Header from '../components/Header/Header';


describe('Test Modal', () => {
	test('Test: Modal does not open when the cart is empty', async () => {
		const store = setupStore();

		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/sultan-online-store/cart']}>
					<ThanksModal />
					<Cart />
				</MemoryRouter>
			</Provider>
		);
		const orderBtn = screen.getByTestId('order-btn');
		await waitFor(() => {
			userEvent.click(orderBtn);
			expect(screen.getByTestId('modal')).not.toBeVisible();
		})
	});

	test('Test: Modal open when the cart is not empty', async () => {
		const store = setupStore();

		await act(async () => render(
			<Provider store={store}>
				<MemoryRouter>
					<Header />
					<ThanksModal />
					<ProductCatalog />
					<Cart />
				</MemoryRouter>
			</Provider>
		));

		const addingToCartBtn = screen.getAllByTestId('adding-to-cart');

		await waitFor(() => {
			userEvent.click(addingToCartBtn[0]);
		})

		const shoppingCartLink = screen.getByTestId('shopping-cart-link');
		await waitFor(() => {
			userEvent.click(shoppingCartLink);
		})

		const orderBtn = screen.getByTestId('order-btn');
		await waitFor(() => {
			userEvent.click(orderBtn);
			expect(screen.getByTestId('modal')).toBeVisible();
		})
	});
})
