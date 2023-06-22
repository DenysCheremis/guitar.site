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

    class Product {
        constructor(src, title, price, parentSelector){
            this.src = src;
            this.title = title;
            this.price = price;
            this.parentSelector = document.querySelector(parentSelector);
        }

        render(){
            const element = document.createElement('div');
            element.classList.add('store__new__item');

            element.innerHTML = `
            <img src="${this.src}" alt="guitar" class="store__new__item__img">
            <div class="store__new__item__name">${this.title}</div>
            <div class="store__new__item__price">$${this.price}</div>
            `
            this.parentSelector.append(element);
        }
    }

    new Product(
        "img/guitars/new_guitar1.png",
        "The Essential Les Paul",
        "1,299.00",
        ".store__new__items"
    ).render();

    new Product(
        "img/guitars/new_guitar2.png",
        "J-45 Standard",
        "1,699.00",
        ".store__new__items"
    ).render();

    new Product(
        "img/guitars/new_guitar3.png",
        "Hummingbird Standard",
        "2,099.00",
        ".store__new__items"
    ).render();

    new Product(
        "img/guitars/top_guitar1.png",
        "Active Precision Bass® PH V",
        "4,199.00",
        ".store__top__items"
    ).render();

    new Product(
        "img/guitars/top_guitar2.png",
        "Redondo Special",
        "2,800.00",
        ".store__top__items"
    ).render();

    new Product(
        "img/guitars/top_guitar3.png",
        "Professional II Stratocaster®",
        "3,199.00",
        ".store__top__items"
    ).render();
});