import dayjs from "dayjs";

export class Converter {
  static getWeekDay(date: string | dayjs.Dayjs) {
    return dayjs(date).locale("pt-br").format("ddd").toUpperCase();
  }

  static getMonthName(date: string | dayjs.Dayjs) {
    const month = dayjs(date).locale("pt-br").format("MMMM");
    return month.charAt(0).toUpperCase() + month.slice(1);
  }

  static strToCurrency(value: number) {
    // console.log('value getCurrency', value);
    if (!value) return "R$ 0,00";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }
}
