const miniNav = document.querySelector(`.navMini`);

document.querySelector(`.hamburger`).addEventListener(`click`, () => {
    miniNav.style.display = `block`;
});
document.getElementById(`exitNav`).addEventListener(`click`, () => {
    miniNav.style.display = `none`;
});

