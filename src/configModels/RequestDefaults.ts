export interface IRequestDefaults {
  lterm?: string;
  userStation?: string;
  employeeId?: string;
  smtoken?: string;
  clientId?: string;
  transactionId?: string;
  racfUserId?: string | null;
  racfPassword?: string | null;
}

export function getRequestDefaults(config?: IRequestDefaults): IRequestDefaults {
  return {
    userStation: 'AA1',
    ...config
  } as IRequestDefaults;
}
