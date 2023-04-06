import React, { FC } from 'react';
import styles from './product.module.scss';

import { Link } from 'react-router-dom';
import { IProduct } from '../../types/IProduct';
import ManagingQuantityInCart from '../../components/UX/ManagingQuantityInCart/ManagingQuantityInCart';
import ButtonToCartFromProduct from '../../components/UX/ButtonToCartFromProduct/ButtonToCartFromProduct';

import grams from './assets/type-g.svg';
import milliliters from './assets/type-ml.svg';
import shareIcon from './assets/share-icon.svg';
import downloadIcon from './assets/download-icon.svg';
import { useAppSelector } from '../../hooks';

interface IProductProp {
	product: IProduct
}

const Product: FC<IProductProp> = ({ product }) => {
	const {
		title,
		imgUrl,
		typeSize,
		size,
		price,
		barcode,
		manufacturer,
		brand,
		description
	} = product;

	const { cart } = useAppSelector(state => state.goodReducer);
	const findedProductInCart = cart.find((content) => content.product.id === product.id);

	return (
		<div className={styles.content}>
			<div className={styles.path_and_back}>
				<p className={styles.path}>{`Главная / Каталог / ${title}`}</p>
				<Link to={'/sultan-online-store/'}>
					<button type="button" className={styles.back}>
						{'Вернуться назад'}
					</button>
				</Link>
			</div>
			<div className={styles.container}>
				<div className={styles.image}>
					<img src={imgUrl} alt="Изображение товара" />

				</div>
				<div className={styles.info}>
					<span className={styles.in_stock}>В наличии</span>
					<h1 className={styles.title_product}>{title}</h1>
					<div className={styles.size}>
						<img className={styles.icon} src={typeSize === 'г' ? grams : milliliters} alt="Тип" />
						<span className={styles.count}>{size}</span>
						<span>{typeSize}</span>
					</div>
					<div className={styles.price_and_cart}>
						<span className={styles.price}>{`${price} ₽`}</span>
						<ManagingQuantityInCart
							product={product}
							alreadyAddedCount={findedProductInCart ? findedProductInCart.count : 0}
						/>
						<ButtonToCartFromProduct />
					</div>
					<div className={styles.extra_options}>
						<div className={styles.share}>
							<img src={shareIcon} alt="Поделиться" />
						</div>
						<div className={styles.offers}>
							При покупке от 5 000 ₽ бесплатная доставка по Кокчетаву и области
						</div>
						<div className={styles.price_list}>
							<span>Прайс-лист</span>
							<img src={downloadIcon} alt="Скачать" />
						</div>
					</div>
					<div className={styles.detailed_info}>
						<div className={styles.feature}>
							<span className={styles.feature_title}>
								{`Производитель: `}
								<span className={styles.feature_data}>
									{manufacturer}
								</span>
							</span>
							<span className={styles.feature_title}>
								{`Бренд: `}
								<span className={styles.feature_data}>
									{brand}
								</span>
							</span>
							<span className={styles.feature_title}>
								{'Артикул: '}
								<span className={styles.feature_data}>
									{barcode.slice(0, 5)}
								</span>
							</span>
							<span className={styles.feature_title}>
								{'Штрихкод: '}
								<span className={styles.feature_data}>
									{barcode}
								</span>
							</span>
						</div>
						<div className={styles.description_block}>
							<h5 className={styles.title}>Описание</h5>
							<p className={styles.description}>{description}</p>
						</div>
						<div className={styles.full_parameter}>
							<h5 className={styles.title}>Характеристики</h5>
							<div className={styles.feature}>
								<span className={styles.feature_title}>
									{'Назначение: '}
									<span className={styles.feature_data}>
										{manufacturer}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Тип: '}
									<span className={styles.feature_data}>
										{brand}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Производитель: '}
									<span className={styles.feature_data}>
										{manufacturer}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Бренд: '}
									<span className={styles.feature_data}>
										{brand}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Артикул: '}
									<span className={styles.feature_data}>
										{barcode.slice(0, 5)}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Штрихкод: '}
									<span className={styles.feature_data}>
										{barcode}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Вес: '}
									<span className={styles.feature_data}>
										{`${size} ${typeSize}`}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Объем: '}
									<span className={styles.feature_data}>
										{`${size} ${typeSize}`}
									</span>
								</span>
								<span className={styles.feature_title}>
									{'Кол-во в коробке: '}
									<span className={styles.feature_data}>
										{`${size} ${typeSize}`}
									</span>
								</span>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Product;
