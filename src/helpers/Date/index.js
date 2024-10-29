export const MONTHS = [
"janvier",
"février",
"mars",
"avril",
"mai",
"juin",
"juillet",
"août",
"septembre",
 "octobre",
 "novembre",
 "décembre",
];
/* Transformation du tableau en objet pour rendre plus fonctionnel l'utilisation des dâtes */ 

export const getMonth = (date) => MONTHS[date.getMonth()];
