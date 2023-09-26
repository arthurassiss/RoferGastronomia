import styles from './styles.module.scss';

type TTitle = {
	title: string;
	span: string;
};

export default function Title({ title, span }: TTitle) {
	return (
		<h2 className={styles.title}>
			{title} <span className={styles.span}>{span}</span>
		</h2>
	);
}
