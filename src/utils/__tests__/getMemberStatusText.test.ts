import { describe, expect, test } from '@jest/globals';

import getMemberStatusText from '@utils/getMemberStatusText';

import { UserStatus } from '@libs/user/constants';

describe('[hook]: getMemberStatusText', () => {
  test('is returning an empty string if status not provided', () => {
    const result = getMemberStatusText(undefined);
    expect(result).toBeDefined();
    expect(result).toStrictEqual('');
  });

  test('is returning the correct text associated to the user status', () => {
    const onlineStatusResult = getMemberStatusText(UserStatus.ONLINE);
    const idleStatusResult = getMemberStatusText(UserStatus.IDLE);
    const doNotDisturbStatusResult = getMemberStatusText(
      UserStatus.DO_NOT_DISTURB,
    );
    expect(onlineStatusResult).toStrictEqual('Online');
    expect(idleStatusResult).toStrictEqual('Idle');
    expect(doNotDisturbStatusResult).toStrictEqual('Do Not Disturb');
  });
});
