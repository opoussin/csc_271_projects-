
document.querySelector('form').addEventListener('submit', function (event) { //this function is used to calculate the number of credits. to come up with this I made some research online and used ChatGPT to understand the concept of addEventListener
    event.preventDefault(); //this prevents the page to reload when the user hits the button 

    const creditNumber = document.getElementById('CreditNumber').value;
    const translation = document.getElementById('translation').value;
    var result = calculateCredits(translation, creditNumber);
    document.getElementById('CreditResult').innerHTML = "Result: <strong>"+result+"</strong>"; // by using innerHTML, the HTML tags that are in the text will be interprated as HTML and not as a string, the result will be displayed in bold

});

function calculateCredits(translation, creditNumber) { // this function is made to calculate the number of credits
    let result;
    if (translation === '1') {// if the option is 1, the translation is from US credits to EU credits
        result = creditNumber * 1.5;
    } else {
        result = creditNumber / 1.5;
    }
    return result
}

function translateToFrench() { // this function is made to translate the english content of the page to french 
    event.preventDefault(); //this prevents the page to reload when the user hits the button

    const list = document.getElementsByTagName('li'); // using this I get the elements that are "li" tags in a collection
    const contentElements = document.getElementsByClassName('contents'); // using this I get the elements that have a "contents" class in a collection

    const translation = [
        "Bienvenue en France ! Ceci est un guide pour vous aider à vous acclimater à la France et vous donner tous les conseils dont vous pourriez avoir besoin pendant votre séjour.",
        "La France est connue pour sa riche culture, son histoire et son système éducatif distinct. Étudier ici offre une opportunité unique de découvrir un nouveau mode de vie tout en poursuivant une croissance académique. Vous trouverez ci-dessous des aspects importants de la vie et de la culture françaises qui vous aideront à naviguer pendant votre séjour en tant qu'étudiant en France.",
        "Équivalence des crédits",
        "L'équivalence des crédits entre les écoles en France et aux États-Unis peut être un aspect crucial pour les étudiants qui envisagent d'étudier à l'étranger. En France, le Système européen de transfert et d'accumulation de crédits (ECTS) est couramment utilisé, où une année académique équivaut généralement à 60 crédits ECTS. En revanche, les États-Unis utilisent un système de crédit horaire, où une année académique équivaut généralement à environ 30 heures de crédit. Pour faciliter la transition, de nombreuses universités ont établi des accords d'équivalence, permettant aux étudiants de transférer des crédits sans problème. Par exemple, 1 crédit ECTS est généralement considéré comme équivalent à 0,5 à 0,75 heure de crédit américain. Comprendre ces équivalences peut aider les étudiants à planifier leurs études et à s'assurer qu'ils répondent aux exigences académiques nécessaires dans les deux pays.",
        "Choisissez une recette :",
        "Entrez un nombre de crédits:",
        "Vie sur le campus et opportunités sociales",
        "Bien que les activités sociales ne soient pas aussi intégrées dans l'expérience universitaire qu'elles le sont dans les collèges américains, les universités françaises offrent toujours des clubs et des organisations étudiantes, bien qu'elles puissent être moins proéminentes. Cependant, la vie en France est davantage centrée sur les villes elles-mêmes que sur les campus. Participer à des événements locaux, des festivals et explorer le paysage culturel est une partie importante de l'expérience.",
        "À quoi s'attendre :",
        "Santé et bien-être en France",
        "Le système de santé français est très apprécié, et en tant qu'étudiant, vous aurez probablement accès à celui-ci grâce à l'assurance santé étudiante. Vous devrez peut-être vous inscrire auprès d'un médecin ou d'un prestataire de soins de santé local. Assurez-vous d'apporter tous les documents de santé nécessaires et de comprendre comment accéder aux services de santé pendant votre séjour.",
        "Conseils de santé :",
        "Etes-vous prêt à aller en France?",
        "Destinations en France",
        "Paris, la capitale, est connue pour son art, sa mode et ses monuments emblématiques comme la Tour Eiffel.",
        "Lyon est célèbre pour sa cuisine et sa riche histoire, en faisant un centre culturel en France.",
        "Marseille, une ville portuaire, offre de belles plages, des marchés animés et une atmosphère méditerranéenne unique."
    ];
    for (let i = 0; i < contentElements.length; i++) {
        contentElements[i].innerHTML = translation[i];
    }
    list[0].textContent = "La vie étudiante peut être davantage centrée sur la ville et moins sur les activités du campus.";
    list[1].textContent = "Rejoignez des associations étudiantes (\"associations étudiantes\") pour rencontrer d'autres étudiants.";
    list[2].textContent = "Explorez les cafés locaux, les musées et les événements culturels pendant votre temps libre.";
    list[3].textContent  = "Assurez-vous d'avoir la bonne assurance santé pour votre séjour, qui peut souvent être fournie par votre université.";
    list[4].textContent  = "Familiarisez-vous avec le système de santé français et inscrivez-vous auprès d'un médecin généraliste si nécessaire.";
    list[5].textContent  = "Profitez des pharmacies (\"pharmacies\") pour les besoins médicaux mineurs.";
}
 