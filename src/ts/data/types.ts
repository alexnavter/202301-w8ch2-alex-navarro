export interface ClientStructure {
  dni: string;
  name: string;
  lastName: string;
  averageBalance: number;
  maximumBalance: number;
  domiciledPayroll: boolean;
  homePhone: number | string;
  mobilePhone: number | string;
}

export type ClientsStructure = ClientStructure[];
