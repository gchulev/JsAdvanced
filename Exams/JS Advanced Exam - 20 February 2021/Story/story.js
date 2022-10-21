'use strict';

class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get comments() {
        return this._comments;
    }

    get likes() {
        if (this._likes[1] === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes[1] === 1) {
            return `${this._likes[0][0]} likes this story!`; // the first value of the array is array of users
        } else {
            return `${this._likes[0][0]} and ${this._likes[1] - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.length === 0) {
            this._likes.push([username]);
            this._likes.push(1);
        } else {
            if (this._likes[0].includes(username)) {
                throw new Error(`You can't like the same story twice!`);
            }
            if (username === this.creator) {
                throw new Error(`You can't like your own story!`);
            }
            this._likes[0].push(username);
            this._likes[1]++;
        }
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes[0].includes(username)) {
            throw new Error(`You can't dislike this story!`);
        }
        this._likes[1]--;
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.some(c => c.id === id)) {

            if (this._comments.length === 0) {
                this._comments.push({ id: 1, username: username, content: content, replies: [] });
            } else {

                let lastCommentId = this._comments[this._comments.length - 1].id;
                this._comments.push({ id: ++lastCommentId, username: username, content: content, replies: [] });
            }
            return `${username} commented on ${this.title}`;
        }

        let currentComment = this._comments.find(c => c.id === id);

        if (currentComment.replies.length === 0) {
            let replyId = Number(`${currentComment.id}.1`);
            currentComment.replies.push({ id: replyId, username: username, content: content });
        }
        else {
            let currentReplayId = currentComment.replies[currentComment.replies.length - 1].id;
            let newReplayId = Number((currentReplayId + 0.1).toFixed(1));
            currentComment.replies.push({ id: newReplayId, username, content });
        }

        return `You replied successfully`;
    }

    toString(sortingType) {
        let result = '';

        if (this._comments.length === 0) {
            return "Comments:";
        }
        switch (sortingType) {
            case 'asc':
                let sortedCommentsAsc = this._comments.sort((a, b) => a.id - b.id);
                for (const elm of sortedCommentsAsc) {
                    elm.replies = elm.replies.sort((a, b) => a.id - b.id);
                }
                sortedCommentsAsc = sortedCommentsAsc.filter(elm => elm.length !== 0);

                result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes[1]}\nComments:\n`;
                for (const comment of sortedCommentsAsc) {
                    result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
                    if (comment.replies.length !== 0) {
                        for (const reply of comment.replies) {
                            result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }

                break;
            case 'desc':
                let sortedCommentsDesc = this._comments.sort((a, b) => b.id - a.id);
                for (const elm of sortedCommentsDesc) {
                    elm.replies = elm.replies.sort((a, b) => b.id - a.id);
                }

                sortedCommentsDesc = sortedCommentsDesc.filter(elm => elm.length !== 0);

                result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes[1]}\nComments:\n`;
                for (const comment of sortedCommentsDesc) {
                    result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
                    if (comment.replies.length !== 0) {
                        for (const reply of comment.replies) {
                            result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
                break;

            case 'username':
                let sortedByUsernameComments = this._comments.sort((a, b) => a.username.localeCompare(b.username));
                for (const elm of sortedByUsernameComments) {
                    elm.replies = elm.replies.sort((a, b) => a.username.localeCompare(b.username));
                }

                sortedByUsernameComments = sortedByUsernameComments.filter(elm => elm.length !== 0);

                result += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes[1]}\nComments:\n`;
                for (const comment of sortedByUsernameComments) {
                    result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
                    if (comment.replies.length !== 0) {
                        for (const reply of comment.replies) {
                            result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
                break;
            default:
                break;
        }

        return result.trimEnd();
    }
}


// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// console.log(art.dislike('Betty'));

// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("Sally"));
console.log(art.like("Ivan"));
console.log(art.like("Steven"));
console.log(art.likes);
console.log(art.comment("Anny", "Some Content"));
console.log(art.comment("Ammy", "New Content", 1));
console.log(art.comment("Zane", "Reply", 2));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 2));
console.log(art.toString('asc'));
