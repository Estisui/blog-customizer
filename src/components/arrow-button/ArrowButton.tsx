import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = (state: boolean) => void;

export const ArrowButton = ({
	onClick,
	isOpenForm,
}: {
	onClick?: OnClick;
	isOpenForm?: boolean;
}) => {
	const arrowClickHandler = () => {
		onClick?.(!isOpenForm);
	};

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpenForm && styles.container_open)}
			onClick={(e: React.MouseEvent) => {
				e.stopPropagation();
				arrowClickHandler();
			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpenForm && styles.arrow_open)}
			/>
		</div>
	);
};
