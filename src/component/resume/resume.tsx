import styles from './resume.module.scss';

interface Balances {
  title: string,
  value: string
}

interface Props {
  sections: Balances[],
}

const Resume: React.FC<Props> = ({ sections }) => (
  <div className={styles.resumeContainer}>
    {
      sections.map((section) => (
        <div className={styles.item} key={section.title}>
          <h2>{section.title}</h2>
          <p className={styles.amout}>$ {section.value}</p>
        </div>
      ))
    }
  </div>

);

export default Resume;
