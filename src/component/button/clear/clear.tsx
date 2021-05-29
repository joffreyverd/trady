import React, { ReactElement } from 'react';
import Button from 'component/button';
import ClearAllIcon from '@material-ui/icons/ClearAll';

function Clear(props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={
        <ClearAllIcon />
      } />
  );
}

export default Clear;
