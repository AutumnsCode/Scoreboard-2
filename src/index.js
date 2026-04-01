const $ = (el) => document.getElementById(el)

const homeResult = $("home-result")
const guestResult = $("guest-result")
const homeadd1Point = $("home-add1Point")
const homeadd2Point = $("home-add2Point")
const homeadd3Point = $("home-add3Point")
const guestadd1Point = $("guest-add1Point")
const guestadd2Point = $("guest-add2Point")
const guestadd3Point = $("guest-add3Point")
const homeResultBox = $("home-resultbox")
const guestResultBox = $("guest-resultbox")
const resetBtn = $("btn-reset")

let homeCount = 0
let guestCount = 0

homeadd1Point.addEventListener("click", () => add1Point(homeadd1Point))
homeadd2Point.addEventListener("click", () => add2Point(homeadd2Point))
homeadd3Point.addEventListener("click", () => add3Point(homeadd3Point))
guestadd3Point.addEventListener("click", () => add3Point(guestadd3Point))
guestadd2Point.addEventListener("click", () => add2Point(guestadd2Point))
guestadd1Point.addEventListener("click", () => add1Point(guestadd1Point))


resetBtn.addEventListener("click", () => {
    // reset the score to 0
    renderGame()
    // remove the leader class from each class
    updateLeader()
})

// render the game
function renderGame() {
    homeCount = 0
    guestCount = 0
    
    homeResult.textContent = homeCount
    guestResult.textContent = guestCount
}

// add a border to the result-box depends who is leading the game.
// if it is a tie, neither will get a border-color
function updateLeader() {
    homeResultBox.classList.remove("leader")
    guestResultBox.classList.remove("leader")
    
    if (homeCount > guestCount) {
        homeResultBox.classList.add("leader")
    } 
    
    if(homeCount < guestCount) {
        guestResultBox.classList.add("leader")
    }
}


// add a point, 
function add1Point(el) {
    if (el.classList.contains("home")) {
        homeCount++
        homeResult.textContent = homeCount
    } else {
        guestCount++
        guestResult.textContent = guestCount
    }
    
    updateLeader()
}

// add 2 points

function add2Point(el) {
    if (el.classList.contains("home")) {
        homeCount += 2
        homeResult.textContent = homeCount
    } else {
        guestCount += 2
        guestResult.textContent = guestCount
    }
    
    updateLeader()
}

// add 3 points
function add3Point(el) {
    if (el.classList.contains("home")) {
        homeCount += 3
        homeResult.textContent = homeCount
    } else {
        guestCount += 3
        guestResult.textContent = guestCount
    }
    
    updateLeader()
}

renderGame()