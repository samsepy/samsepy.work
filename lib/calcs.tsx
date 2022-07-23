export function currentAge(): number {
  const birthday = new Date(1995, 8 - 1, 30);
  const today = new Date();
  const thisYearBirthDay = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate(),
  );
  const age = today.getFullYear() - birthday.getFullYear();
  return today < thisYearBirthDay ? age - 1 : age;
}
