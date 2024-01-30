const profileOption = document.querySelector("#profile-option");
const profileChoice = document.querySelector("#profile-choice");
const PROFILE_KEY = "profileChoice";

function selectProfile() {
    let imgUrl = "";
    if (profileOption.value == 1) {
        imgUrl = "profile/barbie_margot.png";
    } else if (profileOption.value == 2) {
        imgUrl = "profile/ryan_ken.png";
    } else {
        imgUrl = "";
    }

    // Check if profileChoice element exists before setting its src
    if (profileChoice) {
        profileChoice.src = imgUrl;
    }

    localStorage.setItem(PROFILE_KEY, profileOption.value);
}

function paintProfile() {
    profileOption.addEventListener("change", selectProfile);
}

const storedProfileChoice = localStorage.getItem(PROFILE_KEY);

// if storedProfileChoice exists..
if (storedProfileChoice) {
    profileOption.value = storedProfileChoice;
    selectProfile();
}

// Always call paintProfile to add the event listener
paintProfile();