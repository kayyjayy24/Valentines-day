// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change "No" button text to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200ms

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the initial cat.gif
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Make sure the file is named "cat.gif"
    catImage.alt = 'Cat';

    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif and show "ILY!!"
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content

    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Make sure the file is named "cat-heart.gif"
    catHeartImage.alt = 'Cat Heart';

    // Create "ILY!!" message
    var message = document.createElement('p');
    message.innerText = 'ILY!!';
    message.id = 'message'; // Add an ID for styling
    message.style.display = 'none'; // Initially hidden

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        imageContainer.appendChild(message); // Append the message below the image
        message.style.display = 'block'; // Show the message

        // Hide buttons
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();
