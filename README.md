# Simple React Image Gallery Viewer

This is a simple React application that serves as an image gallery viewer, utilizing the Pexels API to fetch and display photos. The application provides a user-friendly interface for viewing high-quality images from the Pexels photo repository.

## Demo

Check out the live demo [here](https://image-gallery-viewer-6rx0ul8yp-remo-antonio-lalatas-projects.vercel.app/)](https://image-gallery-viewer.vercel.app/).
## Features

- **Image Gallery:** Browse a collection of stunning photos fetched from the Pexels API.
- **Search Functionality:** Use the search bar to find specific photos based on keywords or themes.
- **Responsive Design:** The application is currently not optimized for mobile devices.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/react-image-gallery.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-image-gallery
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

Obtain a Pexels API key by signing up on the [Pexels website](https://www.pexels.com/api/) and replace `YOUR_PEXELS_API_KEY` in the `.env.example` file with your actual API key. Rename the file to `.env`.

```env
REACT_APP_PEXELS_API_KEY=YOUR_PEXELS_API_KEY
```

### Running the Application

Start the development server:

```bash
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Upon launching the application, you will be greeted with a default set of images from Pexels.
- Use the search bar to enter keywords and find images related to your search.

## Technologies Used

- React
- Pexels API

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## Acknowledgments

- Thanks to Pexels for providing an amazing API for accessing high-quality photos.

Happy browsing! 📷
