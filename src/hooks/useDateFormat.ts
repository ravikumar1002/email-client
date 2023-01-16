
export const useDateFormat = (date: number) => {
    const newDate = new Date(date);
    const dd = newDate.getDate()
    const mm = newDate.getMonth() + 1
    const yy = newDate.getFullYear()
    const hh = newDate.getHours()
    const min = newDate.getMinutes()

    const getMeridiemFormat = (hour: number) => (hour > 12) ? "pm" : "am"

    const getTwoDigitTime = (time: number) => {
        if (time < 10) {
            return `0${time}`
        } else {
            return `${time}`
        }
    }

    const getTwelveHourFormat = (time: number) => {
        if (time <= 12) {
            return getTwoDigitTime(time)
        } else if (time > 12) {
            return getTwoDigitTime(time - 12)
        } else if (time === 24) {
            return getTwoDigitTime(0)
        }
    }

    const dateArrange = `${dd}/${mm}/${yy}`
    const timeArrange = `${getTwelveHourFormat(hh)}:${getTwoDigitTime(min)} ${getMeridiemFormat(hh)}`

    return `${dateArrange} ${timeArrange}`
}