import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import EditButton from 'component/button/edit/edit';
import RemoveButton from 'component/button/remove/remove';
import Modal from 'component/modal/modal';
import styles from './edit.module.scss';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
}

function Edit(props: Props): ReactElement {
  const { title, action, fields } = props;

  function getActions() {
    return (
      <div className={styles.actionsContainer}>
        <EditButton title='Edit' action={action} />
        <RemoveButton title='Remove' action={action} />
      </div>
    );
  }

  return (
    <Modal
      title={title}
      modalAction={getActions()}
      action={action}
      fields={fields} />
  );
}

export default Edit;
