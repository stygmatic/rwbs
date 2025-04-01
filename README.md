# MIT Rocket Team Website Clone

This is a clone of the MIT Rocket Team website based on the design at [https://rocketry.mit.edu/](https://rocketry.mit.edu/).

## Project Structure

The project is organized as follows:

```
rocket-website/
├── src/
│   ├── images/
│   │   └── README.txt
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── styles.css
│   └── script.js
└── README.md
```

## Setup Instructions

1. Place a rocket team image named 'rocket-team.jpg' in the `src/images/` directory.
2. The website can be deployed directly to any web server or hosting service that supports static websites.
3. For local development, you can use a local server like Live Server in VS Code or any other HTTP server.

## Customization

### Changing Colors

The website uses CSS variables for colors. To change the color scheme, edit the following variables in `styles.css`:

```css
:root {
    --primary-color: #a31f34; /* MIT red */
    --secondary-color: #8a8b8c;
    --background-color: #ffffff;
    --text-color: #333333;
    --accent-color: #031b2e; /* Dark blue accent */
}
```

### Adding Pages

To add new pages:

1. Create a new HTML file in the `src/` directory
2. Copy the header and footer from an existing page
3. Update the navigation links as needed
4. Add your content in the `<main>` section

### Modifying Navigation

To update the navigation menu, edit the `<ul class="nav-links">` section in each HTML file.

## Features

- Responsive design
- Mobile navigation menu
- Contact form
- Newsletter signup
- Smooth scrolling to sections

## Browser Compatibility

This website is designed to work on modern browsers including:
- Chrome
- Firefox
- Safari
- Edge 