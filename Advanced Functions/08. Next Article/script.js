function getArticleGenerator(articles) {

    return function () {
        let firstElm = '';
        if (articles.length > 0) {
            firstElm = articles.shift();
            let newElm = document.createElement('article');
            newElm.textContent = firstElm;
            document.getElementById('content').appendChild(newElm);
        }
    }
}
