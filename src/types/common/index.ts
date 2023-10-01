type UserRegisteredServer = {
  id: number;
  name: string;
  thumbnail?: string;
};

enum IconName {
  LOGO = "logo",
  ADD = "add",
}

export { IconName };
export type { UserRegisteredServer };
