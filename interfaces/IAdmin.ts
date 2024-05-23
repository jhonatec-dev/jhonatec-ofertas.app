import { IPaymentInfo, IServiceOrderEquipment, IServiceOrderHistory } from "./IServiceOrder";
import { IUser } from "./IUser";


interface IFullServiceOrder {
  _id: string;
  description: string;
  idUser: IUser;
  status: string;
  paid: boolean;
  totalValue: number;
  equipments: IServiceOrderEquipment[]; // Adapte conforme a estrutura real
  history: IServiceOrderHistory[]; // Adapte conforme a estrutura real
  canBeCancelled?: boolean;
  idPreference?: string;
  paymentInfo?: IPaymentInfo;
  openedAt: Date;
}

interface IFullScheduleItems {
  hour: number;
  idServiceOrder: IFullServiceOrder | null;
}

interface IFullDaySchedule {
  _id: string;
  date: Date;
  schedule: IFullScheduleItems[];
}

export type { IFullDaySchedule, IFullScheduleItems, IFullServiceOrder };
