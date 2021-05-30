import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './header.module.scss';

type Menu = {
  title: string,
  action: string
}

type Props = {
  logoPath: string,
  sections: Menu[],
}

function Header(props: Props): ReactElement {
  const { sections, logoPath } = props;

  return (
    <div className={styles.header}>
      {
        sections.map((section) => (
          <div className={styles.item} key={section.title}>
            {
              logoPath && logoPath !== '' && section.title === 'Trady' ?
                <div className={styles.logoItem}>
                  <Image src={logoPath} alt='logo' width={30} height={30} />
                  <Link href={section.action}>
                    <a className={styles.name}>{section.title}</a>
                  </Link>
                </div>
                : section.title === 'User' ?
                  <Link href={section.action}>
                    <AccountCircleIcon className={`${styles.name}`} />
                  </Link>
                  :
                  <Link href={section.action}>
                    <a className={styles.name}>{section.title}</a>
                  </Link>
            }
          </div>
        ))
      }
    </div >
  );
}

export default Header;
