import React, { ReactElement } from 'react';
import CategoryTitle from 'component/title/category/category';
import styles from './tiles.module.scss';

type Tile = {
  id: number,
  title: string,
  value: number,
}

type Analytic = {
  id: number,
  title: string,
  value: Tile[],
  symbol: string,
}

type Props = {
  data: Analytic[],
}

function greenOrRed(value: number, css) {
  return value > 0 ? css.greenFont : css.redFont;
}

function Tiles(props: Props): ReactElement {
  const { data } = props;

  return (
    <div>
      {
        data.map((subData) => (
          <div key={subData.id}>
            <CategoryTitle title={subData.title} />
            <div className={styles.tilesContainer}>
              {
                subData.value.map((tile) => (
                  <div className={styles.tile} key={tile.id}>
                    <h3>{tile.title}</h3>
                    <p className={greenOrRed(tile.value, styles)}>
                      {
                        subData.symbol === '$' ?
                          `${subData.symbol} ${tile.value}` :
                          `${tile.value}${subData.symbol}`
                      }
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
