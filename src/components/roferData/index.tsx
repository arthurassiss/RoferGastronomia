import styles from './styles.module.scss';

type TRoferData = {
	number: string;
	name: string;
	text: string;
};

export default function RoferData({ number, name, text }: TRoferData) {
	return (
		<div className={styles.containerData}>
			<div className={styles.data}>
				<h2 className={styles.dataNumber}>{number}</h2>
				<h3 className={styles.dataName}>{name}</h3>
				<p className={styles.dataText}>{text}</p>
			</div>
		</div>
	);
}
