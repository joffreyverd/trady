import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Button from 'component/button/button';
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
};

function Edit(props: Props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={<EditIcon />}
    />
  );
}

export default Edit;
