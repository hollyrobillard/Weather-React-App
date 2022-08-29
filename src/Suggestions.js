export default function Suggestions(props) {
    if (props.description.includes("snow")) {
        return("Wear your coat and gloves!")
    } else if (props.description.includes("rain") || props.description.includes("drizzle") || props.description.includes("thunderstorm")) {
        return ( "Bring your umbrella and rain boots!")
    } else {
        return("Enjoy the weather today!")
    }
}