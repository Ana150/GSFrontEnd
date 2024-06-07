# Projeto de Monitoramento e Conservação de Recifes de Coral

Este projeto tem como objetivo desenvolver um sistema de monitoramento e conservação de recifes de coral, utilizando um webapp com Machine Learning embarcado. A aplicação visa exibir a saúde dos recifes, identificar espécies ameaçadas e detectar padrões de degradação ambiental, promovendo a sustentabilidade da Economia Azul.

## Instalação e Configuração

Para executar este projeto localmente, siga estas etapas:

### 1. Clonar o repositório


### 2. Instalar as dependências

#### Node.js e React

Certifique-se de ter o Node.js instalado em seu sistema. Em seguida, navegue até o diretório do projeto e execute:

npm install


#### Python

Você também precisará do Python instalado em seu sistema, juntamente com as bibliotecas necessárias. Recomenda-se o uso de um ambiente virtual para gerenciar as dependências Python. Para configurar o ambiente virtual e instalar as dependências, execute:


cd ml
python -m venv venv
source venv/bin/activate   # No Windows, use 'venv\Scripts\activate'
pip install -r requirements.txt


### 3. Executar a aplicação

Para iniciar a aplicação React, execute:
npm start


Isso iniciará a aplicação em modo de desenvolvimento. Você poderá acessá-la em [http://localhost:3000](http://localhost:3000).

### 4. Treinar o modelo

Se desejar treinar o modelo de Machine Learning, execute o script `train_model.py`:

python train_model.py


Este script carregará os dados de exemplo, treinará o modelo e salvará o modelo treinado.

## Estrutura do Projeto

- **public/**: Contém o arquivo `index.html` que serve como ponto de entrada para a aplicação.
- **src/**: Contém os códigos-fonte da aplicação.
  - **components/**: Contém os componentes React que compõem a interface do usuário.
  - **App.js**: O componente principal da aplicação React.
  - **index.js**: O ponto de entrada da aplicação React.
- **package.json**: Arquivo de configuração do projeto Node.js.
- **README.md**: Este documento de documentação do projeto.