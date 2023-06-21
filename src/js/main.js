'Use strict'
document.addEventListener('DOMContentLoaded', () => {
    class Card {
        constructor(link, src, alt, title, parentSelector){
            this.link = link;
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.parentSelector = document.querySelector(parentSelector);
        }

        render(){
            const element = document.createElement('div');
            element.classList.add('categories__card');

            element.innerHTML = `
            <a href="${this.link}" class="categories__card">
                <img src="${this.src}" alt="${this.alt}" class="categories__card__img">
                <div class="categories__card__name">${this.title}</div>
            </a>
            `;
            this.parentSelector.append(element);
        }
    }

    new Card(
        "#",
        "img/cards/acoustic.png",
        "Acoustic",
        "Acoustic",
        ".categories__wrapper"
    ).render();

    new Card(
        "#",
        "img/cards/electric.png",
        "Electric",
        "Electric",
        ".categories__wrapper"
    ).render();

    new Card(
        "#",
        "img/cards/basses.png",
        "Basses",
        "Basses",
        ".categories__wrapper"
    ).render();

    new Card(
        "#",
        "img/cards/collections.png",
        "Collections",
        "Collections",
        ".categories__wrapper"
    ).render();
});