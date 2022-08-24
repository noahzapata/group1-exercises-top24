function createGame() {
    const random = Math.round(Math.random() * 100)
    return function guess(num){
        if (num > random){
            return "Muy alto"
        }else if(num < random){
            return "Muy bajo"
        }else{
            return "Lo adivinaste, felicitaciones"
        }
    }
}