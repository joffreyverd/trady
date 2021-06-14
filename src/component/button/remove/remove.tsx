import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Button from 'component/button/button';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
}

function Remove(props: Props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={<DeleteIcon />} />
  );
}

export default Remove;

