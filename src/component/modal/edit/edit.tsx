import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import EditButton from 'component/button/edit/edit';
import Modal from 'component/modal/modal';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
}

function Edit(props: Props): ReactElement {
  const { title, action, fields } = props;

  return (
    <Modal
      title={title}
      modalAction={<EditButton title='Edit' action={action} />}
      action={action}
      fields={fields} />
  );
}

export default Edit;
