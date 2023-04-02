import { FC, useEffect } from "react";
import styles from './product-table.module.scss';

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchGoods } from "../../../store/actionCreators";

import ProductBox from "../ProductBox/ProductBox";

const ProductTable: FC = () => {

	const dispatch = useAppDispatch()
	const { goods } = useAppSelector(state => state.goodReducer)

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		dispatch(fetchGoods())
	}, [])

	return (
		<div className={styles.container}>
			{goods.map((product) => <ProductBox key={product.id} product={product} />)}
		</div>
	)
}

export default ProductTable;