import { describe, expect, test } from '@jest/globals';

import getMemberStatusColor from '@utils/getMemberStatusColor';

import { UserStatus } from '@/types/user';

describe('[hook]: getMemberStatusColor', () => {
  test('is returning an empty string if status not provided', () => {
    const result = getMemberStatusColor(undefined);
    expect(result).toBeDefined();
    expect(result).toStrictEqual('');
  });

  test('is returning the correct background color associated to the user status', () => {
    const onlineStatusResult = getMemberStatusColor(UserStatus.ONLINE);
    const idleStatusResult = getMemberStatusColor(UserStatus.IDLE);
    const doNotDisturbStatusResult = getMemberStatusColor(
      UserStatus.DO_NOT_DISTURB,
    );
    expect(onlineStatusResult).toStrictEqual('bg-grass');
    expect(idleStatusResult).toStrictEqual('bg-cheesy');
    expect(doNotDisturbStatusResult).toStrictEqual('bg-flamingo');
  });
});
