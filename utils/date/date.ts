const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const convertDate = (date: string) => {
  const [year, month, day] = date.split("T")[0].split("-").map(Number);
  return `${months[month - 1]} ${day}, ${year}`;
};
