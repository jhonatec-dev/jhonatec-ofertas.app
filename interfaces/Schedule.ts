interface ISchedule {
  hour: number
  idServiceOrder: string | null
}

interface DaySchedule {
  _id?: string
  date: Date
  schedule: ISchedule[]
}

interface IGenerateMonthlySchedule {
  year: number
  month: number
  days: number[]
  firstHour: number
  lastHour: number
  schedulesDB: DaySchedule[]
}

export type { DaySchedule, IGenerateMonthlySchedule, ISchedule }
