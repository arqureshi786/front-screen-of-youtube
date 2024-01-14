
    // script.js
const data = [
{
    imageUrl: 'https://i.ytimg.com/vi/g-nhQ-1u2OQ/maxresdefault.jpg',
    span: '2M Views • 3 Months Ago',
    title: 'Example Title 1',
    author: 'John Doe',
    profilePicUrl: '/AR.jpg'
},
{
    imageUrl: 'https://i.ytimg.com/vi/g-nhQ-1u2OQ/maxresdefault.jpg',
    span: '2M Views • 3 Months Ago',
    title: 'Example Title 1',
    author: 'John Doe',
    profilePicUrl: '/AR.jpg'
},
{
    imageUrl: 'https://i.ytimg.com/vi/g-nhQ-1u2OQ/maxresdefault.jpg',
    span: '2M Views • 3 Months Ago',
    title: 'Example Title 1',
    author: 'John Doe',
    profilePicUrl: '/AR.jpg'
},
{
    imageUrl: 'https://i.ytimg.com/vi/g-nhQ-1u2OQ/maxresdefault.jpg',
    span: '2M Views • 3 Months Ago',
    title: 'Example Title 1',
    author: 'John Doe',
    profilePicUrl: '/AR.jpg'
},
{
    imageUrl: 'https://i.ytimg.com/vi/g-nhQ-1u2OQ/maxresdefault.jpg',
    span: '2M Views • 3 Months Ago',
    title: 'Example Title 1',
    author: 'John Doe',
    profilePicUrl: '/AR.jpg'
},
{
    imageUrl: 'https://i.ytimg.com/vi/g-nhQ-1u2OQ/maxresdefault.jpg',
    span: '2M Views • 3 Months Ago',
    title: 'Example Title 1',
    author: 'John Doe',
    profilePicUrl: '/AR.jpg'
},
// Add more data items as needed...
];

function renderComponent(item) {
const container = document.createElement('div');
container.classList.add('video');

// Create a div for the thumbnail
const thumbnailContainer = document.createElement('div');
thumbnailContainer.classList.add('thumbnail');

const thumbnailImage = document.createElement('img');
thumbnailImage.src = item.imageUrl;
thumbnailContainer.appendChild(thumbnailImage);

// Create a div for the video details
const detailContainer = document.createElement('div');
detailContainer.classList.add('details');

// Create a div for the author (profile picture)
const authorContainer = document.createElement('div');
authorContainer.classList.add('author');

const profilePicImage = document.createElement('img');
profilePicImage.src = item.profilePicUrl;
authorContainer.appendChild(profilePicImage);

detailContainer.appendChild(authorContainer);

// Create a div for the title
const titleContainer = document.createElement('div');
titleContainer.classList.add('title');

const videoTitle = document.createElement('h3');
videoTitle.textContent = item.title;
titleContainer.appendChild(videoTitle);

const authorLink = document.createElement('a');
authorLink.href = '#'; // Replace '#' with the actual link to the user's profile
authorLink.textContent = item.author;
titleContainer.appendChild(authorLink);

const viewSpan = document.createElement('span');
viewSpan.textContent = item.span;
titleContainer.appendChild(viewSpan);

detailContainer.appendChild(titleContainer);

// Append the elements to the main container
container.appendChild(thumbnailContainer);
container.appendChild(detailContainer);

return container;
}

document.addEventListener("DOMContentLoaded", function () {
const componentContainer = document.getElementById('componentContainer');

data.forEach((item) => {
    const component = renderComponent(item);

    // Append the component to the container
    componentContainer.appendChild(component);
});
});

