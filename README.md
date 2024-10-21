# Brain Stroke Detection Using CNN 

## Demo Video

Watch the demo video to see the Brain Stroke Detection model in action:

![React App - Google Chrome 2024-10-17 23-47-09](https://github.com/user-attachments/assets/2b6996bb-6f1b-46a2-ba5b-4a7fbc49c77a)


This video showcases the functionality of the Tkinter-based GUI interface for uploading CT scan images and receiving predictions on whether the image indicates a brain stroke or not.

## Project Overview

This project focuses on detecting brain strokes using machine learning techniques, specifically a Convolutional Neural Network (CNN) algorithm. The model is trained on a dataset of CT scan images to classify images as either "Stroke" or "No Stroke". The dataset was sourced from Kaggle, and the project uses TensorFlow for model development and Tkinter for a user-friendly interface.

### Key Features:
- **Machine Learning Model**: CNN model built using TensorFlow for classifying brain stroke based on CT scan images.
- **User Interface**: Tkinter-based GUI for easy image uploading and prediction.
- **Visualization**: Includes model performance metrics such as accuracy, ROC curve, PR curve, and confusion matrix.

### Dataset:
- **Source**: [Kaggle - Brain Stroke CT Image Dataset](https://www.kaggle.com/datasets/afridirahman/brain-stroke-ct-image-dataset)
- **Classes**: The dataset contains two categories:
  - **Normal** (No Stroke)
  - **Stroke** (Brain Stroke)

## Project Structure

### Model Architecture

The CNN model architecture consists of:
- 3 Convolutional layers with ReLU activation and MaxPooling.
- 2 Dense layers of 500 units with ReLU activation.
- Dropout layers (20%) for regularization.
- A final dense layer with a sigmoid activation function for binary classification.

**Training**: The model was trained on images resized to 224x224 pixels, normalized for optimal learning.

### Evaluation Metrics:

- **Accuracy on Test Data**: 90%+
- **ROC and PR Curves**: Graphical metrics to evaluate the model's performance.
- **Loss and Accuracy**: Tracked during training for both training and validation sets.

## How to Use the Project

### Requirements

- **Python 3.8+**
- **TensorFlow 2.17.0**
- **Tkinter**
- **PIL (Pillow)**

Install dependencies via `pip`:
```bash
pip install tensorflow pillow matplotlib scikit-learn
```

### Running the Project

1. **Training the Model**:
   - The project code automatically splits the dataset and trains the model.
   - The model is saved as `stroke_detection_model.h5` after training.

2. **Using the Tkinter Interface**:
   - Run the interface using the provided Tkinter code.
   - Upload any CT scan image, and the interface will predict whether the image shows signs of a brain stroke.

```bash
python stroke_detection_app.py
```

### Screenshots

**Main Interface**:
- The application allows you to upload a CT scan image and provides the prediction.
  
![Screenshot 2024-10-17 235407](https://github.com/user-attachments/assets/5900c302-afac-4497-84c3-94448d35c454)


**Output Screens**:
- Predictions will show either "Stroke" or "No Stroke" based on the uploaded image.

Stroke output :

![Screenshot 2024-10-17 235519](https://github.com/user-attachments/assets/7153e623-88c5-4562-bcee-a4ef01526f9e)


No Stroke output :

![Screenshot 2024-10-17 235606](https://github.com/user-attachments/assets/e2c46410-2499-476d-80f7-5c03809afc6d)


**Model Summary**:
- A detailed architecture overview of the CNN model.

![Screenshot 2024-09-06 195504](https://github.com/user-attachments/assets/b5a72630-0101-4935-81f5-2705f387840a)


**Training Epochs**:
- Visual representation of accuracy and loss during model training.

![EpochOutputs](https://github.com/user-attachments/assets/788323f8-dd9a-47f0-8d5c-359857fcb9f8)


**Performance Metrics**:
- ROC and PR curve graphs to evaluate the performance of the model.

![ROCCUrve](https://github.com/user-attachments/assets/10ab3e81-f0d1-4687-bbb9-4b0a8597395a)


![PRCurve](https://github.com/user-attachments/assets/60bc8585-8c77-4cee-884d-67234e071c77)


## Results

- The CNN model achieves over 97% accuracy on the test data.
- **ROC Curve**: The model shows good discriminative ability in predicting strokes.
- **PR Curve**: Precision and recall metrics indicate strong performance, especially for stroke detection.
  
### Confusion Matrix:
- A confusion matrix indicates how well the model classifies stroke and non-stroke cases.

## Conclusion

This project successfully implements a machine learning model for detecting brain strokes using CT scan images. The developed GUI allows easy image uploading and prediction, enhancing accessibility for healthcare applications. Further improvements could involve testing the model on a larger dataset and optimizing the architecture.
