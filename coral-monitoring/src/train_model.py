import tensorflow as tf
import numpy as np

# Dados de exemplo
data = np.array([[0.8, 27, 8.1, 35], 
                 [0.75, 27.5, 8.0, 34.8], 
                 [0.82, 28, 8.2, 35.2],
                 [0.78, 27.8, 8.1, 35], 
                 [0.74, 28.2, 8.0, 34.7]])
labels = np.array([1, 1, 1, 1, 1])  # Suponha que 1 seja um indicativo de saúde boa

# Criação do modelo
model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, activation='relu', input_shape=(4,)),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Treinamento do modelo
model.fit(data, labels, epochs=10)

# Salvar o modelo no formato Keras
model.save('my_model')
