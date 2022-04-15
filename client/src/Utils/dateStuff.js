import jalaaliJs from "jalaali-js";
import { store } from "../Redux/store";

const dateToString = ({ jd, jm, jy }) => `${jy}/${jm}/${jd}`;

const formatTime = (date) => date.toTimeString().split(" ")[0];

const formatJdate = (date) => {
  if (!date) {
    return "-";
  }
  const gdate = new Date(date);
  const jdate = jalaaliJs.toJalaali(gdate);
  return `${formatTime(gdate)} ${dateToString(jdate)}`;
};

const getDateString = (date) => {
  const state = store.getState();
  const local = state.theme.local;
  if (local === "fa") {
    const gdate = new Date(date);
    const jdate = jalaaliJs.toJalaali(gdate);
    return dateToString(jdate);
  }
  return new Date(date).toISOString().split("T")[0];
};

const toGoDate = (date) => {
  const gdate = jalaaliJs.toGregorian(date.year, date.month, date.day);
  return new Date(`${gdate.gy}-${gdate.gm}-${gdate.gd}`);
};

const toJalali = (date) => {
  const gdate = new Date(date);
  const jdate = jalaaliJs.toJalaali(gdate);
  return jdate;
};

export { formatJdate, getDateString, toGoDate, toJalali };
