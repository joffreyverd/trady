import { CSSProperties } from 'react';
import CategoryTitle from 'component/categoryTitle';
import styles from './tiles.module.scss';

interface Tile {
  id: number,
  title: string,
  value: number,
}

interface Analytic {
  id: number,
  title: string,
  value: Tile[],
  symbol: string,
}

interface Props {
  data: Analytic[],
}

function greenOrRed(value: number, css) {
  return value > 0 ? css.greenFont : css.redFont;
}

const Tiles: React.FC<Props> = ({ data }) => (
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

export default Tiles;
