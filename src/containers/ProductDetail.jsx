import React from 'react';
import ProductInfo from '@components/ProductInfo';
import closeIcn from '@icons/icon_close.svg';
import styles from '@styles/ProductDetail.module.scss';
import Image from 'next/image';

const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className={styles.ProductDetail-close}>
				<Image src={closeIcn} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};

export default ProductDetail;