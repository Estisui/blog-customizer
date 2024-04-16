import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { ArticleStateType, fontColors } from 'src/constants/articleProps';
import { Select } from '../select';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleState: (param: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [fontColor, setFontColor] = useState(articleState.fontColor);
	const rootRef = useRef(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => setIsOpen(false),
		onChange: setIsOpen,
	});

	const formSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		setArticleState({ ...articleState, fontColor: fontColor });
	};

	return (
		<>
			<ArrowButton onClick={setIsOpen} isOpenForm={isOpen} />
			<aside
				ref={rootRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form} onSubmit={formSubmitHandler}>
					<Select
						options={fontColors}
						selected={fontColor}
						title='цвет'
						onChange={setFontColor}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
