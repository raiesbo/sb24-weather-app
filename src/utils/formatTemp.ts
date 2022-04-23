export default function formatTemp(temp: number, fahrenheit = false) {
    if (!temp && temp !== 0) return "N.A."

    if (fahrenheit) {
        return `${Math.round((temp * 9 / 5) + 32)} °F`
    }

    return `${Math.round(temp)} °C`
}