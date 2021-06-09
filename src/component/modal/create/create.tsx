import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import CreateButton from 'component/button/create/create';
import Modal from 'component/modal/modal';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
  fields: Fields[],
}

function Create(props: Props): ReactElement {
  const { title, action, fields } = props;

  return (
    <Modal
      title={title}
      modalAction={<CreateButton title='Add' action={action} />}
      action={action}
      fields={fields} />
  );
}

export default Create;
