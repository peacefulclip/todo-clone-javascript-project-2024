const profileOption = document.querySelector("#profile-option");
const profileChoice = document.querySelector("#profile-choice");
const PROFILE_KEY = "profileChoice";

function selectProfile() {
    let imgUrl = "";
    if (profileOption.value == 1) {
        imgUrl = "profile/barbie_margot.png";
    } else if (profileOption.value == 2) {
        imgUrl = "profile/ryan_ken.png";
    } else if (profileOption.value == 3) {
        imgUrl = "profile/human.png";
    } else if (profileOption.value == 4) {
        imgUrl = "profile/weird-barbie.png";
    } else if (profileOption.value == 5) {
        imgUrl = "profile/president-barbie.png";
    } else if (profileOption.value == 6) {
        imgUrl = "profile/lawyer-barbie.png";
    } else if (profileOption.value == 7) {
        imgUrl = "profile/doctor-barbie.png";
    } else if (profileOption.value == 8) {
        imgUrl = "profile/diplomat-barbie.png";
    } else if (profileOption.value == 9) {
        imgUrl = "profile/nobel-prize-winner-barbie.png";
    } else if (profileOption.value == 10) {
        imgUrl = "profile/mermaid-barbie.png";
    } else if (profileOption.value == 11) {
        imgUrl = "profile/midge.png";
    } else if (profileOption.value == 12) {
        imgUrl = "profile/another-ken.png";
    } else if (profileOption.value == 13) {
        imgUrl = "profile/maybe-ken.png";
    } else if (profileOption.value == 14) {
        imgUrl = "profile/only-one-allan.png";
    } else if (profileOption.value == 15) {
        imgUrl = "profile/real-world-man.png";
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