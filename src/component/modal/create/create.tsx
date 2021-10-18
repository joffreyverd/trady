import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import CreateButton from 'component/button/create/create';
import Modal from 'component/modal/modal';
import styles from './create.module.scss';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
};

function Create(props: Props): ReactElement {
  const { title, action, fields } = props;

  function getActions() {
    return (
      <div className={styles.actionsContainer}>
        <CreateButton title='Add' action={action} />
      </div>
    );
  }

  return (
    <Modal
      title={title}
      modalAction={getActions()}
      action={action}
      fields={fields}
    />
  );
}

export default Create;
