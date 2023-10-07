import { UserStatus } from "@/types/user";

/**
 * Retrieve the color name matching a given Member status
 * @example
 * <div className={getStatusColor(memberStatus)} />
 */
export default function getMemberStatusColor(status?: UserStatus) {
  if (!status) return "";
  switch (status) {
    case UserStatus.ONLINE:
      return "bg-grass";
    case UserStatus.IDLE:
      return "bg-cheesy";
    case UserStatus.DO_NOT_DISTURB:
      return "bg-flamingo";
  }
}
