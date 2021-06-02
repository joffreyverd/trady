import React, { ReactElement, useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from 'component/tooltip/tooltip';
import { ThemeContext } from 'context/themeContext/themeContext';
import { PrivacyContext } from 'context/privacyContext/privacyContext';
import styles from './header.module.scss';

const sections = [
  { title: 'Portfolio', action: '/portfolio' },
  { title: 'Operations', action: '/operations' },
  { title: 'Analytics', action: '/analytics' },
  { title: 'Reports', action: '/reports' },
  { title: 'Calendar', action: '/calendar' },
];

function Header(): ReactElement {
  const { themeState, setThemeState } = useContext(ThemeContext);
  const { privacyState, setPrivacyState } = useContext(PrivacyContext);
  const theme = themeState ? styles.dark : styles.light;
  const [shadowBorder, setShadowBorder] = useState(false);
  let shadowBorderTheme = ''
  if (shadowBorder) {
    shadowBorderTheme = themeState ?
      styles.shadowBorderDark : styles.shadowBorderLight;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setShadowBorder(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <div className={`${styles.header} ${shadowBorderTheme} ${theme}`}>

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
          <div
            defaultValue={privacyState}
            className={styles.icon}
            onClick={() => setPrivacyState(!privacyState)}>
            <VisibilityIcon />
          </div>
        </Tooltip>
        <Tooltip text='Change theme'>
          <div
            defaultValue={themeState}
            className={styles.icon}
            onClick={() => setThemeState(!themeState)}>
            <Brightness4Icon />
          </div>
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
