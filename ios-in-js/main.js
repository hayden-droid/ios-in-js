// Create a div element to represent the iOS device
const iOSDevice = document.createElement('div');
iOSDevice.style.width = '375px'; // Set the width to match the iPhone X
iOSDevice.style.height = '812px'; // Set the height to match the iPhone X
iOSDevice.style.backgroundColor = 'white'; // Set the background color to white
iOSDevice.style.border = '1px solid black'; // Add a black border

// Create a div element to represent the status bar
const statusBar = document.createElement('div');
statusBar.style.height = '20px'; // Set the height to match the iOS status bar
statusBar.style.backgroundColor = 'black'; // Set the background color to black

// Add the status bar to the iOS device
iOSDevice.appendChild(statusBar);

// Create a div element to represent the home screen
const homeScreen = document.createElement('div');
homeScreen.style.height = '792px'; // Set the height to match the remaining space on the iOS device
homeScreen.style.backgroundColor = 'lightgray'; // Set the background color to light gray

// Add the home screen to the iOS device
iOSDevice.appendChild(homeScreen);

// Add the iOS device to the document body
document.body.appendChild(iOSDevice);
