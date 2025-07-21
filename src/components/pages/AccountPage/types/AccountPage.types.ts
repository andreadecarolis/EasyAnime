import { PropsWithChildren } from "react";

export type AccountPageProps = PropsWithChildren & {};
export type AccountPageFormValues = {
  email?: string;
  username: string;
  password: string;
};
