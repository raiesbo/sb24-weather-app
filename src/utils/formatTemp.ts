export default function formatTemp(temp: number, fahrenheit = false) {
    if (fahrenheit) {
        return `${Math.round((temp * 9 / 5) + 32)} °F`
    }

    return `${Math.round(temp)} °C`
}