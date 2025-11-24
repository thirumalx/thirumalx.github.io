# Thirumal's Portfolio

Welcome to my personal portfolio website, hosted on GitHub Pages. This site showcases my projects across various domains including Java & Spring, Microservices, DevOps, Blockchain, and AI.

**Live Site:** [thirumalx.github.io](https://thirumalx.github.io)

## Features

- **Modern Design**: A premium dark-themed UI with glassmorphism effects and smooth animations.
- **Sidebar Navigation**: A dashboard-style layout with a fixed sidebar for easy navigation between categories.
- **Dynamic Filtering**: Instantly filter projects by category (Microservices, Java, DevOps, etc.).
- **Real-time Search**: Search for projects by name, description, or technology tags.
- **Tech Icons**: Visual indicators for the primary technology used in each project (Java, Python, Docker, etc.).
- **Responsive**: Fully responsive design that adapts to mobile and desktop screens.

## Technology Stack

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling with CSS Variables, Flexbox, and Grid. No external frameworks used.
- **JavaScript (Vanilla)**: Dynamic DOM manipulation for rendering projects, filtering, and search logic.
- **GitHub API**: (Initially used to fetch data, now cached in `data.js` for performance).

## Setup Locally

To run this website locally on your machine:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/thirumalx/thirumalx.github.io.git
    cd thirumalx.github.io
    ```

2.  **Open in Browser**:
    Simply open the `index.html` file in your preferred web browser.
    ```bash
    # macOS
    open index.html
    
    # Linux
    xdg-open index.html
    
    # Windows
    start index.html
    ```

## Project Structure

- `index.html`: The main entry point.
- `style.css`: All styles and animations.
- `script.js`: Logic for rendering cards, filtering, and search.
- `data.js`: Contains the list of all repositories and their metadata.

## License

This project is open source and available under the [MIT License](LICENSE).
