import { UserStatus } from '@/types/user';

/**
 * Retrieve the tooltip text from a Member status
 * @example
 * const { tooltipNode } = useTooltip({
 *   // ...
 *   content: getMemberStatusText(status) ?? "",
 *   // ...
 * });
 */
export default function getMemberStatusText(status?: UserStatus) {
  if (!status) return '';
  switch (status) {
    case UserStatus.ONLINE:
      return 'Online';
    case UserStatus.IDLE:
      return 'Idle';
    case UserStatus.DO_NOT_DISTURB:
      return 'Do Not Disturb';
  }
}
