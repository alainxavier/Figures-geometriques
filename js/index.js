//initialisation variables
var requete = 0;
var figuSelect;
var message = 0;
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
            carre(10, 10, 250, "white", "white", "2px");
            break;
        case "cercle":
            cercle(160, 160, 140, "white", "white", "2px");
            break;
        case "rectangle":
            rectangle(10, 10, 260, 160, "white", "white", "2px");
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
    .attr("points", "21.384,255.035 103.857,17.225 306.74,255.035")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du triangle rectangle
function triangleRectangle(couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "28.559,259.607 295.536,24.299 295.536,259.607")
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
    .attr("points", "19.045,278.783 156.221,22.217 293.395,278.783")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du pentagone
function pentagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "74.166,291.5 19.675,123.554 162.333,19.787 304.992,123.614 250.501,291.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du hexagone
function hexagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "93.667,291.5 18.667,161.5 93.667,31.5 243.666,31.5 318.666,161.5 243.666,291.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du heptagone
function heptagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "100.917,303.5 19.761,201.555 48.725,74.565 166,18.044 283.274,74.499 312.239,201.566 231.082,303.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du octogone
function octogone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "103.598,305.5 22.5,224.736 22.5,109.931 103.598,28.5 218.402,28.5 299.5,109.931 299.5,224.736 218.402,305.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du ennéagone
function enneagone (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "115.03,310.5 36.43,244.44 18.612,143.339 69.916,54.453 166.333,19.347 262.752,54.434 314.055,143.29 296.237,244.442 217.637,310.5")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}
//fonction de création du trapèze
function trapeze (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "68.523,32.3 19.539,157.702 314.129,157.702 265.143,32.3")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}

//fonction de création du parallélogramme
function parallelogramme (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "66.207,39.849 17.23,204.484 262.793,204.484 311.771,39.849")
    .attr("stroke-miterlimit", 10)
    .style("fill", couleur)
    .style("stroke", contour)
    .style("stroke-width", epaisseur); 
}
//fonction de création du quadrilatère
function quadrilatere (couleur, contour, epaisseur) {
    svg.append("polygon")
    .attr("points", "77.5,27.22 17.997,232.447 316.337,232.447 127.912,150.167")
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
    .attr("transform", "matrix(0.7507 0.6607 -0.6607 0.7507 148.3976 -66.8957)")
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
    indexCouleur = rechercheCouleur(couleurFr, requete);//identifie la couleur demandée
    if (!indexCouleur) {
        indexCouleur = 6;
      } else {}

    if(figuSelect) {
        dessiner();
        afficheMessage("ornelux", "bg-success", "text-white", "Je dessine un " + figuSelect + " " + couleurFr[indexCouleur] +" , Patientez...");
    } else {}
    animer("black", couleurEn[indexCouleur]);
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
    requete = document.getElementById("input-send").value;//appuie du bouton lancer
    if(requete) { //s'il y eu saisie
        recherche();
    }
    else {
        afficheMessage("ornelux", "bg-white", "text-danger", "Vous n'avez rien saisie !");
    }
    indexCouleur = rechercheCouleur(couleurFr, requete);//identifie la couleur demandée
    if (!indexCouleur) {
        indexCouleur = 6;
      } else {}

    if(figuSelect) {
        dessiner();
        afficheMessage("ornelux", "bg-success", "text-white", "Je dessine un " + figuSelect + " " + couleurFr[indexCouleur] +" , Patientez...");
    } else {}
    animer("black", couleurEn[indexCouleur]);
});
$(function () {
    $('[data-toggle="popover"]').popover()
  })