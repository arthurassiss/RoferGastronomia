import { Great_Vibes } from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';
import { Work_Sans } from 'next/font/google';
import { Six_Caps } from 'next/font/google';
import '../styles/reset.scss';
import styles from './styles.module.scss';

const great_Vibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const libre_Baskerville = Libre_Baskerville({
	weight: '400',
	subsets: ['latin'],
});
const work_Sans = Work_Sans({ weight: '100', subsets: ['latin'] });
const six_Caps = Six_Caps({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${great_Vibes.className} ${libre_Baskerville.className} ${work_Sans.className} ${six_Caps.className} ${styles.body}`}>
				{children}
			</body>
		</html>
	);
}
