import React, { ReactElement } from 'react';
import Button from 'component/button';
import AddIcon from '@material-ui/icons/Add';

function Create(props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={
        <AddIcon />
      } />
  );
}

export default Create;
