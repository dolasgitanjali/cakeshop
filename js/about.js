const reviews = [
    {
        name: "John Doe",
        text: "Absolutely love the cakes here! The flavors are always spot on and the designs are beautiful.",
        image: "reviewer_1.jpg"
    },
    {
        name: "Jane Smith",
        text: "Best bakery in town! The pastries are always fresh and the service is excellent.",
        image: "reviewer_2.jpg"
    }
];

function displayReviews() {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
            <img src="${review.image}" alt="${review.name}">
            <h3>${review.name}</h3>
            <p>${review.text}</p>
        `;
        reviewContainer.appendChild(reviewDiv);
    });
}

function addReview() {
    const name = document.getElementById('reviewer-name').value;
    const text = document.getElementById('review-text').value;
    if (name && text) {
        reviews.push({
            name,
            text,
            image: "default_reviewer.jpg"
        });
        displayReviews();
        document.getElementById('reviewer-name').value = '';
        document.getElementById('review-text').value = '';
    } else {
        alert('Please enter your name and review.');
    }
}

window.onload = displayReviews;