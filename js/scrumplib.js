classNames = ["dashboard", "planner", "finder"]
classElem = []

function getElements() {
	classNames.forEach((e) => {
		classElem = classElem.concat([ document.getElementsByClassName(e)[0] ])
	})
}

function elementOn(n) {
	if (n < 0 || n > 2) {
	console.log("err")
	}
	classElem[n].style.display = ""
}

function collapse() {
	classElem.forEach((e) => {
		e.style.display = "none"
	})
}

function focus_dash() {
collapse()
elementOn(classNames.indexOf("dashboard"))
}

function focus_planner() {
collapse()
elementOn(classNames.indexOf("planner"))
}

function focus_finder() {
collapse()
elementOn(classNames.indexOf("finder"))
}

function refresh_content(name) {
t = classElem[classNames.indexOf(name)]
t.style.width = "100%"
t.style.height = "90%"
}

function init() {
getElements()
focus_dash()
refresh_content("dashboard")
}

init()

// add event listeners
