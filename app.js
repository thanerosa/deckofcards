$(document).ready(function () {
    const shuffleURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const cardIMG = "https://deckofcardsapi.com/static/img/";
    var drawURL, deckId

    //err handle
    $.get(shuffleURL, function (data, status) {

        deckId = data.deck_id
        console.log("Deck ID: " + deckId)
        drawURL = "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1"
    });


    const app = Vue.createApp({
        data() {
            return {
                message: "",
                current: "",
                last: "",
                cardNumber: 0,
                valueMatch: 0,
                suitMatch: 0
            }
        },
        methods: {
            drawCard() {
                /*
                using javascript fetch api to access cards
                originally used jquery $.get but encapsulation restricted 'this' access
                */
                fetch(drawURL)
                    .then(res => res.json())
                    .then(data => {
                        if (data.cards[0].code != undefined) {
                            this.cardNumber++

                            console.log("Card Recieved: ", data)
                            this.last = this.current
                            this.current = data.cards[0].code

                            $("#cCard").attr("src", cardIMG + this.current + ".png")

                            if (this.last != "") $("#lCard").attr("src", cardIMG + this.last + ".png")

                            

                            if (this.current[0] == this.last[0]) {
                                this.message = "SNAP VALUE!"
                                this.valueMatch++
                            }
                            else if (this.current[1] == this.last[1]) {
                                this.message = "SNAP SUIT!"
                                this.suitMatch++
                            }
                            else{
                                this.message = ""
                            }
                        }
                        else {
                            console.log("no card!")
                        }
                    })
                    .then(err => console.log(err))
            },
            reShuffle() {

            }

        }
    })



    app.mount('#app')
})


