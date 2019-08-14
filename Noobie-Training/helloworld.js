window.onload = () => {
    console.log("I SUCCESSFULLY LOADED!")
    const imageAngry = document.querySelector(".icon-angry");
    const imageSad = document.querySelector(".icon-sad");
    const imageHappy = document.querySelector(".icon-happy");
    imageAngry.addEventListener('click', (event) => {
        event.preventDefault();
        imageAngry.insertAdjacentHTML('afterend', '<p>I am Lången and i am fucking angry bruv!! :< </p>')
    })
    imageSad.addEventListener('click', (event) => {
        event.preventDefault();
        imageSad.insertAdjacentHTML('afterend', '<p>I am Lången and now i am so sad lol :/.</p>')
    })
    imageHappy.addEventListener('click', (event) => {
        event.preventDefault();
        imageHappy.insertAdjacentHTML('afterend', '<p>I am Lången. I am happy now :>.</p>')
    })
}


