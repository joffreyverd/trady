import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThemeMode from 'helper/themeMode';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from 'component/tooltip';
import styles from './header.module.scss';

const sections = [
  { title: 'Portfolio', action: '/portfolio' },
  { title: 'Operations', action: '/operations' },
  { title: 'Analytics', action: '/analytics' },
  { title: 'Reports', action: '/reports' },
  { title: 'Calendar', action: '/calendar' },
];

function Header(): ReactElement {

  return (
    <div className={styles.header}>

      <div className={styles.item}>
        <div className={styles.logoItem}>
          <Image src='/logo.png' alt='logo' width={30} height={30} />
          <Link href='/'>
            <a className={styles.name}>Trady</a>
          </Link>
        </div>
      </div>

      {
        sections.map((section) => (
          <div className={styles.item} key={section.title}>
            {
              <Link href={section.action}>
                <a className={styles.name}>{section.title}</a>
              </Link>
            }
          </div>
        ))
      }

      <div className={styles.itemGroup}>
        <Tooltip text='Hide amouts'>
          <VisibilityIcon className={styles.icon} />
        </Tooltip>
        <Tooltip text='Change theme'>
          <ThemeMode className={styles.icon} />
        </Tooltip>
        <div className={`${styles.item} ${styles.icon}`}>
          <Link href='/user'>
            <AccountCircleIcon className={`${styles.name}`} />
          </Link>
        </div>
      </div>

    </div >
  );
}

export default Header;
