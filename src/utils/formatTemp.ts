// The condition seems wrong to me, since you are checking that temp is falsy and then check that its value is different from 0
// Also 0 degrees is a valid temperature
export default function formatTemp(temp: number, fahrenheit = false) {
    if (!temp && temp !== 0) return "N.A."

    if (fahrenheit) {
        return `${Math.round((temp * 9 / 5) + 32)} °F`
    }

    return `${Math.round(temp)} °C`
}