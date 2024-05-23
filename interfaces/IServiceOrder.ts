interface IServiceOrderHistory {
  _id?: string;
  description: string;
  status: string;
  date: Date;
  hourInit: number;
  hourEnd: number;
  value: number;
}

interface IServiceOrderEquipment {
  _id?: string;
  description: string;
  serial: string;
  observation: string;
}

interface IServiceOrder {
  _id?: string;
  description: string;
  idUser: string;
  status: string;
  paid: boolean;
  equipments?: IServiceOrderEquipment[];
  history?: IServiceOrderHistory[];
  paymentInfo?: IPaymentInfo;
  openedAt: Date;
}

interface IPaymentInfo {
  collection_id?: string
  collection_status?: string
  payment_id?: string
  status?: string
  external_reference?: string
  payment_type?: string
  merchant_order_id?: string
  preference_id?: string
  site_id?: string
  processing_mode?: string
  merchant_account_id?: string
  fee?: number
  net_received_amount?: number
  date?: Date
  refund_reason?: string
}

export type {
  IPaymentInfo,
  IServiceOrder,
  IServiceOrderEquipment,
  IServiceOrderHistory
};

