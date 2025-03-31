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

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

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

export function formatBirthday(dateString: string) {
  if (!dateString) return;
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function formatPhoneWithRegex(phone: string) {
  if (!phone) return;
  return phone.replace(
    /^(\+7|8)(\d{3})(\d{3})(\d{2})(\d{2})$/,
    "+7 ($2) $3 $4 $5"
  );
}
