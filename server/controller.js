let nextId = 1
const goalsArr = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "Put some sunglasses on. Your future is bright.",
            "Look in your jacket pocket. There's a million dollars in there.",
            "The world is your oyster. Whatever that means.",
            "Tomorrow will be even better than today.",
            "The apocalypse is not in the near future. That's good, I guess."
        ]

        let random = Math.floor(Math.random() * fortunes.length)
        let randFortune = fortunes[random]

        res.send(randFortune)
    },
    getMagicAnswer: (req, res) => {
        const magicAnswers = [
            "It is certain.",
            "Reply hazy, try again.",
            "Very doubtful.",
            "Signs point to yes.",
            "Not likely.",
            "Yes, definitely.",
            "Cannot predict now."
        ]

        let random2 = Math.floor(Math.random() * magicAnswers.length)
        let randAnswer = magicAnswers[random2]

        res.send(randAnswer)
    },
    postDaysWorked: (req, res) => {
        const {daysWorked} = req.body
        
        let newGoal = {
            id: nextId,
            daysWorked
        }
        
        goalsArr.push(newGoal)
        res.send(goalsArr)
        nextId++
    },
    deleteGoal: (req, res) => {
        const deleteId = req.params.id
        let index = goalsArr.findIndex((e) => e.id === +deleteId)
        goalsArr.splice(index, 1)
        res.send(goalsArr)
    }
}