const heading1 = React.createElement("h1", {
    style:{
        color: "red"
    }
}, "Wowwwwww")
const heading2 = React.createElement("h2", {
    style:{
        color: "blue"
    }
}, "Hahahahahha")

const container = React.createElement("div", {
}, [heading1,heading2])
console.log(container)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)