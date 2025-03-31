export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
    })
    .replace(".", "");
}

export function calculateAge(birthday: string | undefined) {
  if (!birthday) return;
  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Проверяем, был ли уже день рождения в этом году
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Определяем правильное окончание
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${age} лет`;
  }

  switch (lastDigit) {
    case 1:
      return `${age} год`;
    case 2:
    case 3:
    case 4:
      return `${age} года`;
    default:
      return `${age} лет`;
  }
}
