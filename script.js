// ES 1 : Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

let garage = {
    'automobili' : [
        {'brand':'fiat', type:'panda'},
        {'brand':'fiat', type:'500'},
        {'brand':'fiat', type:'barchetta'},
        {'brand':'citroen', type:'c1'},
        {'brand':'citroen', type:'c2'},
        {'brand':'citroen', type:'c3'},
    ],

    'brandType' : function (marca) {
        let filteredCars = this.automobili.filter((auto) => auto.brand == marca);
        let models = filteredCars.map((auto) => auto.type);
        return models;
    }
}

console.log(garage.brandType('fiat'));


// ES 2: Replicare lo stesso esercizio del bowling visto durante la lezione.
// EXTRA: provate a creare altri due metodi:
// uno per aggiungere un nuovo giocatore
// uno per impostare la classifica giocatori


// -impostare i punteggi che ottengono i singoli giocatori,in modo casuale
// -impostare il punteggio finale per ogni giocatore
// -determinare il vincitore
// -aggiungo un nuovo vincitore


let bowling = {
    'players' :[
        {'name' :'lorenzo', 'scores' : []},
        {'name' : 'pippo', 'scores' : []},
        {'name' : 'goku' , 'scores' : []},

    ],

    point : function(numeroTiri){

        this.players.forEach((player) => {

            for(i = 0;i < numeroTiri; i++) {
                player.scores.push(Math.floor(Math.random()*10));
            }   
            
        })
    },

    sum : function(){
        this.players.forEach((player) => {
            let finalScore = player.scores.reduce((a, b) => a + b);
            player.scores = finalScore;
        })
    },

    setWinner : function() {
        let winner = this.players[0];
        console.log(winner);
        this.players.forEach(player => {
            if (player.scores > winner.scores) {
                winner = player;
            }
        });
        
        console.log(`il vincitore della partita è ${winner.name} con ${winner.scores} punti`);
    },

    newPlayer : function (nome) {
        this.players.push({'name': nome, 'scores':[]})
    },

    setRanking : function() {
        let rank = this.players.sort((a, b) => b.scores - a.scores);
        return rank;
    }
    
}

bowling.newPlayer('Mattia');
bowling.point(10);
bowling.sum();
console.log(bowling.setRanking());
bowling.setWinner();