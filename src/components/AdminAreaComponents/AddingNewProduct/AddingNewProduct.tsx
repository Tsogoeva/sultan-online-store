import { FC, useEffect, useState } from 'react';
import _ from 'lodash';
import styles from './adding-new-product.module.scss';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addNewProduct } from '../../../store/goodSlice';
import CheckboxForManagement from '../CheckboxForManagement/CheckboxForManagement';
import { IChecked, IProduct } from '../../../interfaces';


const AddingNewProduct: FC = () => {
	const dispatch = useAppDispatch()

	const { goods, managingTypes, managingSubtypes } = useAppSelector(state => state.goodReducer);

	const [title, setTitle] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const [typeSize, setTypeSize] = useState('');
	const [size, setSize] = useState('');
	const [barcode, setBarcode] = useState('');
	const [manufacturer, setManufacturer] = useState('');
	const [brand, setBrand] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	const defaultImg = 'data:image/jpeg;base64,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';

	const cloneTypes = _.clone(managingTypes);
	const cloneSubtypes = _.clone(managingSubtypes);
	const [checkedTypes, updateCheckedTypes] = useState<IChecked[]>(cloneTypes);
	const [checkedSubtypes, updateCheckedSubtypes] = useState<IChecked[]>(cloneSubtypes);

	useEffect(() => {
		updateCheckedTypes(cloneTypes);
		updateCheckedSubtypes(cloneSubtypes);
	}, [managingTypes, goods]);


	const checkTypeProduct = (type: string, isChecked: boolean) => {
		updateCheckedTypes(checkedTypes.map((checkedType) => {
			if (checkedType.name === type) {
				checkedType = { ...checkedType, isChecked: !isChecked };
			}
			return checkedType;
		}))
	};

	const checkSubtypeProduct = (subtype: string, isChecked: boolean) => {
		updateCheckedSubtypes(checkedSubtypes.map((checkedSubtype) => {
			if (checkedSubtype.name === subtype) {
				checkedSubtype = { ...checkedSubtype, isChecked: !isChecked };
			}
			return checkedSubtype;
		}))
	};


	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const typesProduct = checkedTypes
			.filter((type) => type.isChecked === true)
			.map((type) => type.name);

		const subtypesProduct = checkedSubtypes
			.filter((subtype) => subtype.isChecked === true)
			.map((subtype) => subtype.name);

		const newProduct: IProduct = {
			id: _.uniqueId('new_'),
			imgUrl: imgUrl || defaultImg,
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
		};

		dispatch(addNewProduct(newProduct));

		const storage = localStorage.getItem('addedGoods');
		let parsedData: IProduct[];

		if (typeof storage === 'string') {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			parsedData = JSON.parse(storage);
			const updatedStorage = [...parsedData, newProduct];
			localStorage.setItem('addedGoods', JSON.stringify(updatedStorage));
		}

		setTitle('');
		setImgUrl('');
		setTypeSize('');
		setSize('');
		setBarcode('');
		setManufacturer('');
		setBrand('');
		setDescription('');
		setPrice('');
	}

	const renderTypeCheckBox = () => checkedTypes
		.map(({ name, isChecked }) => <CheckboxForManagement
			key={name}
			name={name}
			isChecked={isChecked}
			onClick={checkTypeProduct}
		/>
		);

	const renderSubtypeCheckBox = () => checkedSubtypes
		.map(({ name, isChecked }) => <CheckboxForManagement
			key={name}
			name={name}
			isChecked={isChecked}
			onClick={checkSubtypeProduct}
		/>
		);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Введите данные товара</h2>
			<form name="form" className={styles.form} onSubmit={submitHandler}>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="title">Введите название товара</label>
					<input required className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} name="title" type="text" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="imgUrl">Введите URL изображения товара</label>
					<input className={styles.input} value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} name="imgUrl" type="text" />
				</div>

				<div className={styles.checkbox_container}>
					<span className={styles.checkbox_title}>{'Тип товара: '}</span>
					{renderTypeCheckBox()}
				</div>

				<div className={styles.checkbox_container}>
					<span className={styles.checkbox_title}>{'Подтип товара: '}</span>
					{renderSubtypeCheckBox()}
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="typeSize">Введите тип единицы измерения товара</label>
					<input required className={styles.input} value={typeSize} onChange={(e) => setTypeSize(e.target.value)} name="typeSize" type="text" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="size">Введите вес/объём товара</label>
					<input required className={styles.input} value={size} onChange={(e) => setSize(e.target.value)} name="size" type="text" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="brand">Введите Бренд товара</label>
					<input required className={styles.input} value={brand} onChange={(e) => setBrand(e.target.value)} name="brand" type="text" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="manufacturer">Введите производителя товара</label>
					<input required className={styles.input} value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} name="manufacturer" type="text" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="barcode">Введите штрихкод товара</label>
					<input required className={styles.input} value={barcode} onChange={(e) => setBarcode(e.target.value)} name="barcode" type="text" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="description">Введите описание товара</label>
					<textarea required className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} name="description" />
				</div>

				<div className={styles.input_container}>
					<label className={styles.label} htmlFor="price">Введите цену товара в рублях</label>
					<input required className={styles.input} value={price} onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))} name="price" type="text" />
				</div>

				<button className={styles.submit} type="submit">Отправить</button>
			</form>
		</div>
	)
}

export default AddingNewProduct;
