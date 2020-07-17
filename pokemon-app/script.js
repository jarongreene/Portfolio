// promise example
/* const userLogin = (ms) => new Promise((resolve) => serTimeout(resolve,ms));

userLogin(3000).then(() => console.log('This represents us looking for your login data'));

let loadSite = () => {
    console.log('site is loaded');
};

loadSite(); */

////////////////////////////////////////////

const userLoggedIn = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

userLoggedIn(3000)
    .then(() => console.log('us getting you logged in!'));

let loadSite = () => {
    console.log('loading the site');
};

loadSite();