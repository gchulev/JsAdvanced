'use strict';

class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error('This article model is not included in this gallery!');
        }

        let foundArticle = this.listOfArticles.find(a => a.articleName === articleName);

        if (foundArticle) {
            if (foundArticle.articleModel === articleModel.toLowerCase()) {
                foundArticle.quantity += quantity;
            }
        } else {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({ articleModel, articleName, quantity });

        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let guest = this.guests.find(g => g.guestName === guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 0;
        guest = { guestName, points, purchaseArticle: 0 };
        this.guests.push(guest);

        switch (personality) {
            case 'Vip':
                guest.points = 500; 
                break;

            case 'Middle':
                guest.points = 250;
                break;

            default:
                guest.points = 50;
                break;
        }

        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName) {
        let articleFound = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);
        

        if (!articleFound) {
            throw new Error('This article is not found.');
        }

        if (articleFound.quantity === 0) {
            return `The ${articleFound.articleName} is not available.`;
        }

        let currentGuest = this.guests.find(g => g.guestName === guestName);

        if (!currentGuest) {
            return `This guest is not invited.`;
        }
        
        let articlePrice = this.possibleArticles[articleModel];

        if (currentGuest.points >= articlePrice) {
            currentGuest.points -= articlePrice;
            currentGuest.purchaseArticle++;
            articleFound.quantity--;

        } else {
            return "You need to more points to purchase the article.";
        }

        return `${currentGuest.guestName} successfully purchased the article worth ${articlePrice} points.`;
    }

    showGalleryInfo (criteria) {
        let result = '';
        if (criteria === 'article') {
            result += 'Articles information:\n';

            for (const article of this.listOfArticles) {
                result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`;
            }
        } else if ('guest') {
            result += 'Guests information:\n';

            for (const guest of this.guests) {
                result += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            }
        }

        return result.trimEnd();
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
