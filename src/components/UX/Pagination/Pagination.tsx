import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import cn from 'classnames';
import { setCurrentPage } from "../../../store/goodSlice";
import { IProduct } from "../../../types/IProduct";
import styles from './pagination.module.scss';

interface IPaginationProps {
	goods: IProduct[],
}

const Pagination: FC<IPaginationProps> = ({ goods }) => {
	const dispatch = useAppDispatch();
	const { pagination: { currentPage, perPage } } = useAppSelector(state => state.goodReducer)

	const totalCount = goods.length;
	const totalPages = Math.ceil(totalCount / perPage);
	const pages = [];

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	return (
		<div className={styles.pages}>
			{pages
				.map((page) => <div
					key={page}
					className={currentPage === page ? cn(styles.page, styles.active) : styles.page}
					onClick={() => dispatch(setCurrentPage(page))}
				>
					{page}
				</div>)}
		</div>
	)
}

export default Pagination;
