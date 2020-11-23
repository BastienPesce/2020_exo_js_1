let taches = [
	{
		nom: 'Travailler efficacement',
		duree: 180,
		priorite: 3,
	},
	{
		nom: 'Boire un café',
		duree: 20,
		priorite: 1,
	},
	{
		nom: 'Discuter avec ses collèges',
		duree: 120,
		priorite: 1,
	},
];


//affichage des noms
console.log(taches.map(obj=>obj.nom));


//affichage des tableaux avec priorité=1
console.log(taches.filter((obj) => obj.priorite === 1));

//affichage de la duree totale
for(let i=0;i<=taches.length;i++){
	var duree=taches.reduce((somme, tache) => somme + tache.duree, 0);
}
console.log(duree);


