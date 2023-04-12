import { FC, useEffect, useState } from 'react';
import _ from 'lodash';
import styles from './product-data-change.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addModifiedProductToGoods } from '../../../store/goodSlice';
import CheckboxForManagement from '../CheckboxForManagement/CheckboxForManagement';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import { IChecked, IProduct } from '../../../interfaces';


interface IEditProductProp {
	product: IProduct,
	onSubmit: (value: React.SetStateAction<boolean>) => void
}

const EditProductForm: FC<IEditProductProp> = ({ product, onSubmit }) => {
	const dispatch = useAppDispatch();

	const { goods, managingTypes, managingSubtypes } = useAppSelector(state => state.goodReducer);

	const cloneTypes = _.clone(managingTypes);
	const currentTypes = cloneTypes.map((cloneType) => {
		if (product.types.includes(cloneType.name)) {
			cloneType = { ...cloneType, isChecked: true };
		}
		return cloneType;
	})

	const [checkedTypes, updateCheckedTypes] = useState<IChecked[]>(currentTypes);

	const cloneSubtypes = _.clone(managingSubtypes);
	const currentSubtypes = cloneSubtypes.map((cloneSubtype) => {
		if (product.subtypes.includes(cloneSubtype.name)) {
			cloneSubtype = { ...cloneSubtype, isChecked: true };
		}
		return cloneSubtype;
	})

	const [checkedSubtypes, updateCheckedSubtypes] = useState<IChecked[]>(currentSubtypes);


	const checkTypeProduct = (type: string, isChecked: boolean) => {
		updateCheckedTypes(checkedTypes.map((checkedType) => {
			if (checkedType.name === type) {
				checkedType = { ...checkedType, isChecked: !isChecked };
			}
			return checkedType;
		}));
	}

	const checkSubtypeProduct = (subtype: string, isChecked: boolean) => {
		updateCheckedSubtypes(checkedSubtypes.map((checkedSubtype) => {
			if (checkedSubtype.name === subtype) {
				checkedSubtype = { ...checkedSubtype, isChecked: !isChecked };
			}
			return checkedSubtype;
		}));
	}

	const [title, setTitle] = useState(product.title);
	const [imgUrl, setImgUrl] = useState(product.imgUrl);
	const [typeSize, setTypeSize] = useState(product.typeSize);
	const [size, setSize] = useState(product.size);
	const [barcode, setBarcode] = useState(product.barcode);
	const [manufacturer, setManufacturer] = useState(product.manufacturer);
	const [brand, setBrand] = useState(product.brand);
	const [description, setDescription] = useState(product.description);
	const [price, setPrice] = useState(product.price);


	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const typesProduct = checkedTypes
			.filter((type) => type.isChecked === true)
			.map((type) => type.name);

		const subtypesProduct = checkedSubtypes
			.filter((subtype) => subtype.isChecked === true)
			.map((subtype) => subtype.name);

		const modifiedProduct = {
			id: product.id,
			imgUrl,
			title,
			types: typesProduct,
			subtypes: subtypesProduct,
			typeSize,
			size,
			barcode,
			manufacturer,
			brand,
			description,
			price
		}

		dispatch(addModifiedProductToGoods(modifiedProduct));

		setTitle('');
		setImgUrl('');
		setTypeSize('');
		setSize('');
		setBarcode('');
		setManufacturer('');
		setBrand('');
		setDescription('');
		setPrice('');

		onSubmit(false);
	}

	const cancelHandler = () => {
		onSubmit(false);
	}

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="title"
				>
					Введите название товара
				</label>
				<input
					required
					className={styles.input}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					name="title"
					type="text"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="imgUrl"
				>
					Введите URL изображения товара
				</label>
				<input
					className={styles.input}
					value={imgUrl}
					onChange={(e) => setImgUrl(e.target.value)}
					name="imgUrl"
					type="text"
				/>
			</div>

			<div className={styles.checkbox_container}>
				<span className={styles.checkbox_title}>{'Тип товара: '}</span>
				{checkedTypes.map(({ name, isChecked }) => <CheckboxForManagement
					key={name}
					name={name}
					isChecked={isChecked}
					onClick={checkTypeProduct}
				/>
				)}
			</div>

			<div className={styles.checkbox_container}>
				<span className={styles.checkbox_title}>{'Подтип товара: '}</span>
				{checkedSubtypes.map(({ name, isChecked }) => <CheckboxForManagement
					key={name}
					name={name}
					isChecked={isChecked}
					onClick={checkSubtypeProduct}
				/>
				)}
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="typeSize"
				>
					Введите тип единицы измерения товара
				</label>
				<input
					required
					className={styles.input}
					value={typeSize}
					onChange={(e) => setTypeSize(e.target.value)}
					name="typeSize"
					type="text"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="size"
				>
					Введите вес/объём товара
				</label>
				<input
					required
					className={styles.input}
					value={size}
					onChange={(e) => setSize(e.target.value)}
					name="size"
					type="text"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="brand"
				>
					Введите Бренд товара
				</label>
				<input
					required
					className={styles.input}
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
					name="brand"
					type="text"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="manufacturer"
				>
					Введите производителя товара
				</label>
				<input
					required
					className={styles.input}
					value={manufacturer}
					onChange={(e) => setManufacturer(e.target.value)}
					name="manufacturer"
					type="text"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="barcode"
				>
					Введите штрихкод товара
				</label>
				<input
					required
					className={styles.input}
					value={barcode}
					onChange={(e) => setBarcode(e.target.value)}
					name="barcode"
					type="text"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="description"
				>
					Введите описание товара
				</label>
				<textarea
					required
					className={styles.textarea}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					name="description"
				/>
			</div>

			<div className={styles.input_container}>
				<label
					className={styles.label}
					htmlFor="price"
				>
					Введите цену товара в рублях
				</label>
				<input
					required
					className={styles.input}
					value={price}
					onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
					name="price"
					type="text"
				/>
			</div>

			<button
				className={styles.button}
				type="submit"
			>
				Внести изменения
			</button>
			<button
				className={styles.button}
				type="button"
				onClick={cancelHandler}
			>
				Отменить изменения
			</button>
		</form>
	)
}


const ChangeProductDetails: FC = () => {
	const { goods } = useAppSelector(state => state.goodReducer);
	const [searchedProduct, setSearchedProduct] = useState('');
	const [currentProduct, setCurrentProduct] = useState<IProduct | null>();
	const [shouldShowEditForm, setShouldShowEditForm] = useState(false)
	const [currentProductNotFound, setCurrentProductNotFound] = useState(false);

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();

		setCurrentProduct(goods.find((product) => product.barcode === searchedProduct));

		if (!currentProduct) {
			setCurrentProductNotFound(true);
			setShouldShowEditForm(false);
		} else {
			setShouldShowEditForm(true);
		}
	}

	useEffect(() => {
		if (!shouldShowEditForm) {
			setCurrentProduct(null);

		}
	}, [shouldShowEditForm])

	useEffect(() => {
		if (currentProduct) {
			setCurrentProductNotFound(false);
			setShouldShowEditForm(true);
		}

	}, [currentProduct])

	return (
		<div className={styles.content}>
			<h2 className={styles.title}>Изменить данные товара</h2>


			<div className={styles.input_container_for_barcode}>
				<label
					className={styles.label}
					htmlFor="searchedProduct"
				>
					Введите штрихкод товара, в который нужно внести изменения
				</label>
				<input
					required
					className={styles.input}
					value={searchedProduct}
					onChange={(e) => setSearchedProduct(e.target.value)}
					name="searchedProduct"
					type="text"
				/>
				<button
					className={styles.search}
					type="submit"
					onClick={submitHandler}
				>
					Поиск
				</button>
			</div>

			{currentProduct && shouldShowEditForm && <EditProductForm product={currentProduct} onSubmit={() => setShouldShowEditForm(false)} />}
			{currentProductNotFound && <ProductNotFound />}

		</div>
	)
}

export default ChangeProductDetails;
