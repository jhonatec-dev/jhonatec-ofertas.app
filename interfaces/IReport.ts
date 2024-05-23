interface IReport {
  users: {
    total: number;
    admin: number;
  };
  serviceOrders: {
    total: number;
    pending: number;
    paid: number;
  };
  revenue: {
    total: number;
    liquid: number;
    taxed: number;
    refunds: number;
  };
  company: {
    firstSchedule: number;
    lastSchedule: number;
  };
}

export type { IReport };
