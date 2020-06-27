//simuler une API
// faire un tableau où on met toutes les données
// en gros c'est le JS qui va chercher les données et les mettre dans le HTML au début, ça allège le html
// fonction .map pour boucler dans le tableau

//Paramètres : Nom, âge, image, description

let DATA_KITTENS = [
    {
        "name" : "Croquettes",
        "id" : "croquettes",
        "age" : "3 mois",
        "profile_img" : "chaton8.jpg",
        "description" : "Croquettes est notre dernier pensionnaire en date ! Un peu timide, il fait quelques bêtises quand on a le dos tourné. Mais il parvient toujours à se faire pardonner !"
    },
    {
        "name" : "Kiki",
        "id" : "kiki",
        "age" : "4 mois",
        "profile_img" : "chaton2.jpg",
        "description" : "Kiki est une aventurière née : indépendante, elle aime partir en exploration, et protègera son territoire de tout intrus moins gros qu'elle."
    },
    {
        "name" : "Vanille",
        "id" : "vanille",
        "age" : "3 mois",
        "profile_img" : "chaton3.jpg",
        "description" : "Vanille est trop craquaaaante ! D'une grande gentillesse, discrète et affectueuse, elle saura faire fondre votre coeur."
    },
    {
        "name" : "Cookie",
        "id" : "cookie",
        "age" : "3 mois",
        "profile_img" : "chaton4.jpg",
        "description" : "Cookie est très joueur ! Il se lie rapidement d'amitié avec ses compagnons et adorera courir avec eux un peu partout."
    },
    {
        "name" : "Nénette",
        "id" : "nenette",
        "age" : "2 mois",
        "profile_img" : "chaton5.jpg",
        "description" : "Nénette est très calme et un peu réservée. Elle a besoin de prendre confiance en elle mais apprécie déjà beaucoup les câlins !"
    },
    {
        "name" : "Moustache et Olive",
        "id" : "moustache",
        "age" : "4 mois",
        "profile_img" : "chaton6.png",
        "description" : "Ce frère et cette soeur sont deux chatons qui n'ont pas froid aux yeux ! Ils passent leur temps ensemble et sont très attachés l'un à l'autre."
    },
    {
        "name" : "Caramel",
        "id" : "caramel",
        "age" : "3 mois",
        "profile_img" : "chaton7.jpg",
        "description" : "Caramel est à croquer ! Et si son nom ne lui vient pas de son pelage, c'est un chaton très gourmand qui vous fera les yeux doux pour avoir toujours plus de croquettes. Ne vous laissez pas avoir !"
    }
]

// Returns the info of the kitten matching ID in the db 
function updateInfo(infos){
    document.getElementById("image_du_chat").src = infos.profile_img ;
    document.getElementById("nom_du_chat").textContent = infos.name ;
    document.getElementById("age_du_chat").textContent = infos.age ;
    document.getElementById("description_du_chat").textContent = infos.description ;
};

function getInfo(ID){
    for (
        let compteur = 0;
        compteur < DATA_KITTENS.length;
        compteur++
    ) {
        let infos = DATA_KITTENS[compteur];
        if (ID == infos.id){
            return infos;
        };
    }
    return false;
};

function imgSurvol(image){
    let infos = getInfo(image.id);
    if(infos != false){
        updateInfo(infos);
    }
};

function initialize_imgs(){
    for (
        let compteur = 0;
        compteur < DATA_KITTENS.length;
        compteur++
    ) {
        let infos = DATA_KITTENS[compteur];
        document.getElementById(infos.id).src = infos.profile_img ;
    }
}

// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.8714403;
var lon = 2.2757516;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    var marker = L.marker([lat, lon]).addTo(macarte);
}

window.onload = function(){
    updateInfo(DATA_KITTENS[0]);
    initialize_imgs();
    initMap();
};