import React, { ReactElement } from 'react';
import Button from 'component/button';
import EditIcon from '@material-ui/icons/Edit';
import styles from './update.module.scss';

function Update(props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={
        <EditIcon className={styles.editIcon} />
      } />
  );
}

export default Update;

