alert("Le fichier JS fonctionne !");
const timeZones = {
    paris: { name: "PARIS", country: "FRANCE", zone: "Europe/Paris" },
    londres: { name: "LONDRES", country: "ROYAUME-UNI", zone: "Europe/London" },
    newyork: { name: "NEW YORK", country: "ÉTATS-UNIS", zone: "America/New_York" },
    tokyo: { name: "TOKYO", country: "JAPON", zone: "Asia/Tokyo" },
    sydney: { name: "SYDNEY", country: "AUSTRALIE", zone: "Australia/Sydney" },
    dubai: { name: "DUBAÏ", country: "ÉMIRATS ARABES UNIS", zone: "Asia/Dubai" },
    singapour: { name: "SINGAPOUR", country: "SINGAPOUR", zone: "Asia/Singapore" },
    montreal: { name: "MONTRÉAL", country: "CANADA", zone: "America/Toronto" },
    saopaulo: { name: "SÃO PAULO", country: "BRÉSIL", zone: "America/Sao_Paulo" },
    chi,ne: { name: "PÉKIN", country: "CHINE", zone: "Asia/Shanghai" },
    afriquedusud: { name: "JOHANNESBOURG", country: "AFRIQUE DU SUD", zone: "Africa/Johannesburg" },
    inde: { name: "NEW DELHI", country: "INDE", zone: "Asia/Kolkata" }
};

let activeKey = "paris";


// =========================
// HORLOGES
// =========================

function updateClocks() {
    const now = new Date();

    // Petites horloges
    for (const key in timeZones) {
        const element = document.getElementById(key);

        if (element) {
            element.textContent = now.toLocaleTimeString("fr-FR", {
                timeZone: timeZones[key].zone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            });
        }
    }

    // Grande horloge
    const active = timeZones[activeKey];

    const time = document.getElementById("time");
    const date = document.getElementById("date");
    const city = document.getElementById("selected-city");
    const mainClockContainer = document.getElementById("main-clock-container");

    if (time) {
        time.textContent = now.toLocaleTimeString("fr-FR", {
            timeZone: active.zone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }

    if (date) {
        date.textContent = now.toLocaleDateString("fr-FR", {
            timeZone: active.zone,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    if (city) {
        city.textContent = active.name;
    }

    // Met à jour le pays en arrière-plan (filigrane)
    if (mainClockContainer) {
        mainClockContainer.setAttribute("data-country", active.country);
    }
}

updateClocks();
setInterval(updateClocks, 1000);


// =========================
// PLEIN ÉCRAN
// =========================

const fullscreenBtn = document.getElementById("fullscreen-btn");
const mainClockContainer = document.getElementById("main-clock-container");

if (fullscreenBtn && mainClockContainer) {
    fullscreenBtn.addEventListener("click", function() {
        if (!document.fullscreenElement) {
            mainClockContainer.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
}


// =========================
// GESTION DU BOUTON FOND PAYS
// =========================

const toggleBgBtn = document.getElementById("toggle-bg-btn");

if (toggleBgBtn && mainClockContainer) {
    toggleBgBtn.addEventListener("click", function() {
        mainClockContainer.classList.toggle("no-bg");
        
        if (mainClockContainer.classList.contains("no-bg")) {
            toggleBgBtn.style.opacity = "0.4";
        } else {
            toggleBgBtn.style.opacity = "1";
        }
    });
}


// =========================
// COULEURS
// =========================

const bleu = document.getElementById("bleu-btn");
const bordeaux = document.getElementById("bordeaux-btn");
const kaki = document.getElementById("kaki-btn");

function changerCouleur(fond, cartes, bannieres, neon) {
    document.body.style.background = fond;

    document.querySelectorAll(".main-clock, .card").forEach(function(element) {
        element.style.background = cartes;
    });

    document.querySelectorAll(".banner").forEach(function(element) {
        element.style.background = bannieres;
    });

    document.body.style.setProperty("--neon", neon);
}

// BLEU
if (bleu) {
    bleu.addEventListener("click", function() {
        changerCouleur(
            "#07111f",
            "#0b1829",
            "linear-gradient(135deg, #102238, #081321)",
            "#00aaff"
        );
    });
}

// BORDEAUX
if (bordeaux) {
    bordeaux.addEventListener("click", function() {
        changerCouleur(
            "#260d12",
            "#3a141b",
            "#3a141b",
            "#ff1744"
        );
    });
}

// KAKI
if (kaki) {
    kaki.addEventListener("click", function() {
        changerCouleur(
            "#30382a",
            "#3f4936",
            "#3f4936",
            "#b6ff00"
        );
    });
}

window.addEventListener("load", function() {
    window.scrollTo(0, 0);
});
