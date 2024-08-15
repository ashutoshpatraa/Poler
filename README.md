# Chatbot Application

This is a simple chatbot application built using Flask, NLTK, and Keras. The chatbot can respond to user inputs based on predefined intents and a trained neural network model.

## Folder Structure

- **app.py**: The main application file that contains the Flask web server and the chatbot logic.
- **model.h5**: The trained neural network model file saved in HDF5 format.
- **intents.json**: A JSON file containing the intents, which include patterns and responses for the chatbot.
- **texts.pkl**: A pickle file containing the vocabulary (words) used by the chatbot.
- **labels.pkl**: A pickle file containing the classes (intents) used by the chatbot.
- **templates/**: A folder containing HTML templates for rendering web pages.
  - **index.html**: The main HTML file for the chatbot interface.
- **static/**: A folder for static files like CSS, JavaScript, and images.

## Setup and Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    venv\Scripts\activate  # On Windows
    # source venv/bin/activate  # On macOS/Linux
    ```

3. **Install the required packages:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Download NLTK data:**
    ```python
    import nltk
    nltk.download('popular')
    ```

5. **Run the application:**
    ```bash
    python app.py
    ```

6. **Open your web browser and go to:**
    ```
    http://127.0.0.1:5000/
    ```

## How It Works

1. **Text Processing:**
    - The input sentence is tokenized and lemmatized using NLTK.
    - The sentence is converted into a bag-of-words representation.

2. **Prediction:**
    - The bag-of-words representation is fed into the trained neural network model.
    - The model predicts the intent of the input sentence.

3. **Response:**
    - Based on the predicted intent, a random response is selected from the predefined responses in [`intents.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fashu%2FDocuments%2FGitHub%2FPoler%2Fintents.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\ashu\Documents\GitHub\Poler\intents.json").

## File Descriptions

- **app.py**: Contains the main Flask application and chatbot logic.
- **model.h5**: The trained neural network model.
- **intents.json**: Contains the intents, patterns, and responses.
- **texts.pkl**: Contains the vocabulary used by the chatbot.
- **labels.pkl**: Contains the classes (intents) used by the chatbot.
- **templates/index.html**: The main HTML file for the chatbot interface.
- **static/**: Contains static files like CSS, JavaScript, and images.

## Dependencies

- Flask
- NLTK
- Keras
- NumPy
- Pickle
- JSON

## License

This project is licensed under the MIT License. See the [`LICENSE`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fashu%2FDocuments%2FGitHub%2FPoler%2FLICENSE%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\ashu\Documents\GitHub\Poler\LICENSE") file for details.