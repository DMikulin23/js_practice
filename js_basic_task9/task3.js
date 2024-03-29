// Використовуючи fetch та async await зробіть 2 функції, які використовують сайт https://jsonplaceholder.typicode.com/.

// Перша функція - приймає айді посту та виводить його body.

// Друга функція - за вашим бажанням.

// Використовуйте документацію з сайту https://jsonplaceholder.typicode.com/

async function getPostIdAndBody(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = response.json();
    return data;
}

getPostIdAndBody(1)
    .then(data => {
        console.log(data.id);
        console.log(data.body);
    })


async function getCommentPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments?id=${id}`);
    const data = response.json();
    return data;
}

getCommentPost(2)
    .then(data => console.log(data));