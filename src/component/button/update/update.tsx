import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Button from 'component/button';
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
}

function Update(props: Props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={
        <EditIcon />
      } />
  );
}

export default Update;

