import React, { ReactElement, useContext } from 'react';
import CategoryTitle from 'component/title/category/category';
import { ThemeContext } from 'context/themeContext';
import { PrivacyContext } from 'context/privacyContext';
import styles from './tiles.module.scss';

type Tile = {
  id: number,
  title: string,
  value: number,
};

type Analytic = {
  id: number,
  title: string,
  value: Tile[],
  symbol: string,
};

type Props = {
  data: Analytic[],
};

function greenOrRed(value: number, css) {
  return value > 0 ? css.greenFont : css.redFont;
}

function Tiles(props: Props): ReactElement {
  const { data } = props;
  const { themeState } = useContext(ThemeContext);
  const { privacyState } = useContext(PrivacyContext);
  const theme = themeState ? styles.dark : styles.light;

  function setValue(symbol, value): string {
    if (symbol === '$') {
      return privacyState ? '$ *****' : `$ ${value}`;
    }
    return `${value} ${symbol}`;
  }

  return (
    <div>
      {
        data.map((subData) => (
          <div key={subData.id}>
            <CategoryTitle title={subData.title} />
            <div className={styles.tilesContainer}>
              {
                subData.value.map((tile) => (
                  <div className={`${styles.tile} ${theme}`} key={tile.id}>
                    <h3>{tile.title}</h3>
                    <p className={greenOrRed(tile.value, styles)}>
                      {setValue(subData.symbol, tile.value)}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Tiles;
