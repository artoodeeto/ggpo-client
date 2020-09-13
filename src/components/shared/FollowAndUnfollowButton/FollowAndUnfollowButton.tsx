import React, { FC } from 'react';

type FollowAndUnFollowBtnProps = {
  btnName: string;
  onClickTriggerFn: () => void;
};

/**
 *
 * @param btnName name for the button
 * @param onClickTriggerFn method to pass to be triggered onClick.
 */
const FollowAndUnFollowBtn: FC<FollowAndUnFollowBtnProps> = (props) => {
  return (
    <button type="submit" onClick={() => props.onClickTriggerFn()}>
      {props.btnName}
    </button>
  );
};

export default FollowAndUnFollowBtn;
