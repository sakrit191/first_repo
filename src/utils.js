export const calculateDaysUntilBirthday = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
  
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
  
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = nextBirthday.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / oneDay);
  
    return diffInDays;
  };
  