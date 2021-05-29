import React, { ReactElement } from 'react';
import Button from 'component/button';
import EditIcon from '@material-ui/icons/Edit';

function Update(props): ReactElement {
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

