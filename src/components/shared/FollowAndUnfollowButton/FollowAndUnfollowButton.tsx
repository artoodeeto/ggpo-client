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
const FollowAndUnFollowBtn: FC<FollowAndUnFollowBtnProps> = ({ onClickTriggerFn, btnName }) => {
  return (
    <button type="submit" onClick={() => onClickTriggerFn()}>
      {btnName}
    </button>
  );
};

export default FollowAndUnFollowBtn;
