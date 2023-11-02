
type dateObj = {
    greetings: string,
    dayOfWeak: string,
    day: number,
    month: string
}

export function getDate():dateObj {
    const today = new Date();
    const hour = today.getHours();

    const greetings = hour >= 4 ? 'Good morning' : hour < 13 ? 'Good day' : hour >= 17 ? 'Good evening' : 'Good night';

    return {
        greetings,
        day: today.getDate(),
        dayOfWeak: today.toString().split(' ')[0],
        month: today.toString().split(' ')[1]
    }
}

export function getDateFromTxt(inputDate: string): string {
  const date = new Date(inputDate);
  return `${date.toString().split(' ')[0]}, ${date.getDate()} ${date.toString().split(' ')[1]}`
}