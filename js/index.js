//initialisation variables
var requete = 0;
var figuSelect;
var message = 0;
var remplissage;
var indexCouleur;
var svg = d3.select("svg");
var figures = ["cercle", "triangle rectangle", "triangle isocèle", "triangle équilatéral", "triangle","quadrilatère", "trapèze", "parallélogramme", "rectangle", "losange", "carré", "pentagone", "hexagone", "heptagone", "octogone", "ennéagone", "décagone"];

var couleurFr = ["noir", "gris", "rose", "vert", "cyan", "bleu", "blanc", "rouge", "jaune", "violet", "orangé", "orange", "pourpre", "turquoise"];

var couleurEn = ["black", "grey", "pink", "green", "aqua", "blue", "white", "red", "yellow", "violet", "orangered", "orange", "purple", "turquoise",];

//déclaration des fonctions

function afficheMessage(ind, bgClasse, textClasse, messagVal) { //affiche des messages...
    var docElt = document.getElementById(ind);
    docElt.value = messagVal;
    docElt.className = "form-control " + bgClasse + " " + textClasse;
    message ="";
}
//Nouvelle fonction de recherche à terminer
function rechercheCouleur(tableaux, donnee) {
    var retour;
    var indic = -1;
    tableaux.forEach(function(valeur, index) {        
        indic = donnee.indexOf(valeur);
        if (indic > -1) {
            retour = index; 
        }
    });
    return retour
}

function recherche() { //recherche une figure géométrique
    var indice = -1;
    var i = 0;
    while(indice < 0) {
        indice = requete.toUpperCase().indexOf(figures[i].toUpperCase());
        if(i == figures.length - 1) {
            indice = 1000;
            figuSelect = "";
            afficheMessage("ornelux", "bg-warning", "text-danger", "Veuillez saisir une figure géométrique correcte");
        } else {
            figuSelect = figures[i];
            //message = "Je dessine un " + figuSelect + " , Patientez...";
            //afficheMessage("ornelux", "bg-success", "text-white", message);
        }
        i++;
    }
}

//fonction de création de figure
function dessiner() {
    svg.selectAll("*").remove();
    switch(figuSelect) {
        case "carré":
            carre(10, 10, 400, "white", "white", "2px");
            break;
        case "cercle":
            cercle(200, 200, 190, "white", "white", "2px");
            break;
        case "rectangle":
            rectangle(10, 10, 400, 200, "white", "white", "2px");
            break;
        case "triangle":
            triangle ("white", "white", "2px");
            break;
        case "triangle rectangle":
            triangleRectangle ("white", "white", "2px");
            break;
        case "triangle isocèle":
            triangleIsocele ("white", "white", "2px");
            break;
        case "triangle équilatéral":
            triangleEquilateral ("white", "white", "2px");
            break;
        case "pentagone":
            pentagone ("white", "white", "2px");
            break;
        case "hexagone":
            hexagone ("white", "white", "2px");
            break;
        case "heptagone":
            heptagone ("white", "white", "2px");
            break;
        case "octogone":
            octogone ("white", "white", "2px");
            break;
        case "ennéagone":
            enneagone ("white", "white", "2px");
            break;
        case "losange":
            losange ("white", "white", "2px");
            break;
        case "trapèze":
            trapeze ("white", "white", "2px");
            break;
        case "parallélogramme":
            parallelogramme ("white", "white", "2px");
            break;
        case "quadrilatère":
            quadrilatere ("white", "white", "2px");
            break;
        default:
            //ne rien faire
    }
}

//fonction de création du cercle
function cercle(cx, cy, r, couleur, contour, epaisseur) {
    svg.append("circle")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur);
}

//fonction de création du carré
function carre(x, y, cote, couleur, contour, epaisseur) {
    svg.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", cote)
    .attr("height", cote)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur);
}
//fonction de création du rectangle
function rectangle(x, y, larg, haut, couleur, contour, epaisseur) {
    svg.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", larg)
    .attr("height", haut)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du triangle
function triangle(couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "32,379 132,61 378,379")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du triangle rectangle
function triangleRectangle(couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "32,379 32,21 378,379")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du triangle isocèle
function triangleIsocele(couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "12,309 125,9 238,309")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du triangle Equilatéral
function triangleEquilateral(couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "18.349,317.5 191.554,17.5 364.759,317.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du pentagone
function pentagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "85.755,375.5 13.101,151.736 203.312,13.461 393.523,151.775 320.869,375.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du hexagone
function hexagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "114.318,365.5 14.318,192 114.318,18.5 314.318,18.5 414.318,192 314.318,365.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du heptagone
function heptagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "130.713,397.5 22.505,261.632 61.124,92.341 217.49,16.994 373.856,92.274 412.476,261.643 304.268,397.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du octogone
function octogone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "121.418,384.5 13.5,275.944 13.5,122.871 121.418,14.5 274.492,14.5 382.5,122.871 382.5,275.944 274.492,384.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du ennéagone
function enneagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "139.73,400.5 34.929,312.481 11.172,177.712 79.576,59.212 208.134,12.411 336.691,59.197 405.096,177.674 381.339,312.482 276.538,400.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}
//fonction de création du trapèze
function trapeze (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "84,14 12,230 445,230 373,14")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du parallélogramme
function parallelogramme (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "84,10 12,227 373,227 445,10")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}
//fonction de création du quadrilatère
function quadrilatere (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "84,10 12,227 373,227 145,140")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du losange
function losange (couleur, contour, epaisseur) {
    svg.append("rect")
    .attr("x", 65.5)
    .attr("y", "65.5")
    .attr("transform", "matrix(0.7507 0.6607 -0.6607 0.7507 147.9591 -69.075)")
    .attr("width", 200)
    .attr("height", 200)
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}
//Animation
function animer (contour, rempli) {
    var anim = d3.transition()
    .duration(1000)
    .ease(d3.easeLinear);
    d3.selectAll("polygon")
    .transition(anim).style("stroke", contour)
    .transition(anim).style("fill", rempli);
    d3.selectAll("circle")
    .transition(anim).style("stroke", contour)
    .transition(anim).style("fill", rempli);  
    d3.selectAll("rect")
    .transition(anim).style("stroke", contour)
    .transition(anim).style("fill", rempli);
}

//réinitialisation app
function reinit () {
    remplissage = 'white';
    message = 0;
    figuSelect = 0;
    requete = 0;
}

//fonction principale
//module speechkitt
// Init the browser's own Speech Recognition
var recognition = new webkitSpeechRecognition();

// Tell KITT the command to use to start listening
SpeechKITT.setStartCommand(function() {recognition.start()});

// Tell KITT the command to use to abort listening
SpeechKITT.setAbortCommand(function() {recognition.abort()});

// Register KITT's recognition start event with the browser's Speech Recognition
recognition.addEventListener('start', SpeechKITT.onStart);

// Register KITT's recognition end event with the browser's Speech Recognition
recognition.addEventListener('end', SpeechKITT.onEnd);

// Define a stylesheet for KITT to use
SpeechKITT.setStylesheet('speechkitt/themes/flat-emerald.css');

// Render KITT's interface
SpeechKITT.vroom(); // SpeechKITT.render() does the same thing, but isn't as much fun!
//Mon ajout personnel
recognition.lang = "fr-FR";
SpeechKITT.setInstructionsText('Demander une figure géométrique plane !');
recognition.addEventListener('start', SpeechKITT.onStart);

recognition.addEventListener('result', function(ev) {
    SpeechKITT.setRecognizedSentence(ev.results[ev.resultIndex][0].transcript);
    requete = SpeechKITT.getLastRecognizedSentence();
    recherche();
    afficheMessage("input-send", "bg-secondary", "text-white", requete);
    dessiner();
    indexCouleur = rechercheCouleur(couleurFr, requete)
    remplissage = couleurEn[indexCouleur];
    afficheMessage("ornelux", "bg-success", "text-white", "Je dessine un " + figuSelect + " " + couleurFr[indexCouleur] +" , Patientez...");
    if (!remplissage) {
      remplissage = "white";
    }
    animer("black", remplissage);
    //animer();
});
//gestion des erreurs
recognition.onerror = function(ev) {
    switch (event.error) {
        case 'network':
            message = "Impossible ! Vérifier votre connexion internet...";
            break;
        case 'no-speech':
            message = "Auncun mot n'a été détecté!";
            break;
        case 'audio-capture':
            message = "Echec de la capture audio";
            break;
        case 'not-allowed':
            message = "Les captures audios ne sont pas autorisées!";
            break;
        default:
    }
    afficheMessage("ornelux", "bg-danger", "text-white", message);
}
// depart
var boutton = document.getElementById("button-send"); 
boutton.addEventListener("click", function() { 
    requete = document.getElementById("input-send").value;//appuie sur le bouton lancer
    if(requete) { //s'il y eu saisie
        recherche();
    }
    else {
        message = "Vous n'avez rien saisie !";
        afficheMessage("ornelux", "bg-white", "text-danger", message);
    }
    indexCouleur = rechercheCouleur(couleurFr, requete);
    remplissage = couleurEn[indexCouleur];
    if (!remplissage) {
        remplissage = "white";
      } else {}

    if(figuSelect) {
        dessiner();
        afficheMessage("ornelux", "bg-success", "text-white", "Je dessine un " + figuSelect + " " + couleurFr[indexCouleur] +" , Patientez...");
    } else {}
    //console.log(remplissage);
    animer("black", remplissage);
    //console.log(remplissage);
});