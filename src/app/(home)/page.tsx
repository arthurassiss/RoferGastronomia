import styles from './styles.module.scss';
import Image from 'next/image';
import menuIcon from '../../../public/images/menuIcon.svg';
import roferLogo from '../../../public/images/rofer_logo.svg';
import Arrow from '../../../public/images/arrow.svg';
import Chef from '../../../public/images/chef.jpg';
import RoferData from '@/components/roferData';
import Title from '../../components/title/index';

export default function Home() {
	return (
		<div>
			<div className={styles.containerHomePage}>
				<div className={styles.bgHeaderImage}></div>
				<header className={styles.header}>
					<Image
						className={styles.menuIcon}
						src={menuIcon}
						alt='Menu-icon'
						width={32}
						height={32}
					/>
					<Image
						className={styles.roferIcon}
						src={roferLogo}
						alt='Menu-icon'
						width={1000}
						height={136}
					/>
				</header>
				<div className={styles.containerHomeDiv}>
					<div className={styles.homeDiv}>
						<h2 className={styles.subtitle}>Last Project</h2>
						<Title title='Rofer' span='Events' />
						<p className={styles.text}>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Magnam molestiae minima odio ratione deleniti
							dicta ducimus accusamus tempore voluptas deserunt,
							sed ut. Ad, aut possimus repellendus neque
							doloremque sed nulla.
						</p>
					</div>
				</div>
				<div className={styles.containerCarrossel}>
					<div className={styles.carrossel}>
						<div className={styles.carrosselPhoto1}></div>
						<div className={styles.carrosselPhoto2}></div>
						<div className={styles.carrosselPhoto3}></div>
					</div>
					<div className={styles.viewMoreDiv}>
						<h3 className={styles.viewMoreTitle}>View More</h3>
						<Image
							className={styles.viewMoreArrow}
							src={Arrow}
							alt='seta'
							width={96}
							height={96}
						/>
					</div>
				</div>
				<div className={styles.containerAboutDiv}>
					<div className={styles.containerAbout}>
						<div className={styles.about}>
							<Title title='Sobre' span='Rofer' />
							<p className={styles.text}>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Unde modi repellendus fugit
								quidem maxime sit quaerat fuga eos ullam, optio
								laboriosam repudiandae dicta quisquam
								perferendis vero doloribus similique, neque
								animi! Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Perferendis reiciendis ipsum
								quibusdam reprehenderit illum exercitationem!
								Distinctio dicta nisi blanditiis, odit tempora
								modi inventore unde architecto et ab impedit ea
								incidunt.
							</p>
						</div>
						<div className={styles.containerAboutImageDiv}>
							<div className={styles.aboutImageDiv}>
								<div className={styles.aboutImage}></div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.containerRoferData}>
					<RoferData
						number='10'
						name='arigonoldo'
						text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi repellendus fugit quidem maxime sit quaerat fuga eos ullam, optio laboriosam repudiandae dicta quisquam perferendis vero doloribus similique, neque animi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
					/>
					<RoferData
						number='57'
						name='arigonoldo'
						text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi repellendus fugit quidem maxime sit quaerat fuga eos ullam, optio laboriosam repudiandae dicta quisquam perferendis vero doloribus similique, neque animi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
					/>
					<RoferData
						number='39'
						name='arigonoldo'
						text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi repellendus fugit quidem maxime sit quaerat fuga eos ullam, optio laboriosam repudiandae dicta quisquam perferendis vero doloribus similique, neque animi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
					/>
					<RoferData
						number='90'
						name='arigonoldo'
						text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi repellendus fugit quidem maxime sit quaerat fuga eos ullam, optio laboriosam repudiandae dicta quisquam perferendis vero doloribus similique, neque animi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
					/>
					<RoferData
						number='100'
						name='arigonoldo'
						text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi repellendus fugit quidem maxime sit quaerat fuga eos ullam, optio laboriosam repudiandae dicta quisquam perferendis vero doloribus similique, neque animi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
					/>
				</div>
				<div className={styles.containerProjects}>
					<Title title='Our' span='Projects' />
					<div className={styles.projects}>
						<div className={styles.ProjectsPhoto1}></div>
						<div className={styles.ProjectsPhoto2}></div>
						<div className={styles.ProjectsPhoto3}></div>
						<div className={styles.ProjectsPhoto4}></div>
						<div className={styles.ProjectsPhoto5}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
