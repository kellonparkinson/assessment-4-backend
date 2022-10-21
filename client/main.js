const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const magicBallForm = document.getElementById('magicForm')
const numberRadio = document.getElementById('numberForm')

const baseURL = "http://localhost:4000"

const getCompliment = () => {
    axios.get(`${baseURL}/api/compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios
    .get(`${baseURL}/api/fortune`)
    .then((res) => {
        const fortune = res.data
        alert(fortune)
    })
    .catch((err) => console.log(err))
}

// magic 8 ball that gives one answer per page load
const getMagicAnswer = (event) => {
    event.preventDefault()
    clearMagicAnswer()

    axios
    .get(`${baseURL}/api/magic`)
    .then((res) => {
        let answerP = document.createElement('p')
        answerP.textContent = res.data
        document.getElementById('magicBall').appendChild(answerP)
    })
    .catch((err) => console.log(err))
}

const clearMagicAnswer = () => {
    document.getElementById('magicBall').innerHTML = ``
}

//posts the selected number to the page with a delete button
const goalContainer = document.getElementById('goal-container')

const postDaysWorked = (event) => {
    event.preventDefault()

    let days = document.querySelector('input[name="numbers"]:checked')

    let body = {
        daysWorked: days.value
    }

    axios
    .post(`${baseURL}/api/goal/`, body)
    .then((res) => {
        let goals = res.data
        for (let i = 0; i < goals.length; i++) {
            const daysDiv = document.createElement('div')
            daysDiv.innerHTML = `<h3>Your Goal is to work ${goals[i].daysWorked} days.</h3>
            <button onClick="deleteGoal(${goals[i].id})">Delete Goal</button>`
            goalContainer.appendChild(daysDiv)
        }
        console.log(goals[0].id)
    })
    .catch((err) => console.log(err))

    days.checked = false
}

//deletes the goal from the array and from the page
const deleteGoal = (id) => {
    axios
    .delete(`${baseURL}/goal/${id}`)
    .then((res) => {
        goalContainer.innerHTML = 'No goals set. Refresh to set new goal.'
    })
    .catch((err) => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
magicBallForm.addEventListener('submit', getMagicAnswer)
numberRadio.addEventListener('submit', postDaysWorked)