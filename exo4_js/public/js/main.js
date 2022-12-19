let user;
user = prompt(`Entrez une phrase`);

let mot;
mot = prompt(`Quel est le mot à changer de la derniere phrase`);

let motRemp;
motRemp = prompt('Par quel mot voulez vous remplacer');

let phraseModif = user.replace(mot,motRemp)

alert(phraseModif);
