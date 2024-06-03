let heroName = "Trid"
let heroExperience = 9500


if (heroExperience <= 1000) {
    experience = "Ferro"
} else if (heroExperience >= 1001 && heroExperience < 2000){
    experience = "Bronze"
} else if (heroExperience >= 2001 && heroExperience < 3000){
    experience = "Prata"
} else if (heroExperience >= 3001 && heroExperience < 5000){
    experience = "Ouro"
} else if (heroExperience >= 5001 && heroExperience < 6000){
    experience = "Platina"
} else if (heroExperience >= 6001 && heroExperience < 7000){
    experience = "Diamante"
} else if (heroExperience >= 7001 && heroExperience < 8000){
    experience = "Ascendente"
} else if (heroExperience >= 8001 && heroExperience < 9000){
    experience = "Imortal"
} else {
    experience = "Radiante"
};


console.log("O Herói de nome " + heroName + " está no nível " + experience + "!")