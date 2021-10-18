import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Button from 'component/button/button';
import AddIcon from '@material-ui/icons/Add';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
};

function Create(props: Props): ReactElement {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={
        <AddIcon />
      }
    />
  );
}

export default Create;
