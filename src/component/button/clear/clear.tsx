import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import Button from 'component/button/button';
import ClearAllIcon from '@material-ui/icons/ClearAll';

type Props = {
  title: string,
  action: Dispatch<SetStateAction<boolean>>,
};

const Clear = (props: Props): ReactElement => {
  const { title, action } = props;

  return (
    <Button
      title={title}
      action={action}
      icon={
        <ClearAllIcon />
      }
    />
  );
};

export default Clear;
