# API de Análise de Áudio

Esta API oferece um serviço para analisar áudios e determinar se o conteúdo foi gravado por um humano ou gerado por inteligência artificial. Utiliza `ffmpeg` para conversão de formatos, `multer` para upload de arquivos e `TensorFlow.js` para análise de áudio.

## Funcionalidades

- **Upload de Áudio**: Envie arquivos de áudio para a API.
- **Análise de Áudio**: Receba uma análise indicando se o áudio foi gravado por um humano (`humanRecordedAudio`) ou gerado por IA.
- **Documentação Interativa**: Acesse e explore a documentação da API através do Swagger.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express](https://expressjs.com/) - Framework para aplicações web
- [Multer](https://www.npmjs.com/package/multer) - Middleware para upload de arquivos
- [ffmpeg](https://ffmpeg.org/) - Biblioteca para manipulação de áudio e vídeo
- [TensorFlow.js](https://www.tensorflow.org/js) - Biblioteca para aprendizado de máquina em JavaScript
- [Swagger](https://swagger.io/) - Ferramenta para documentação da API

## Instalação

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/valdir-alves3000/audio-analysis-api-nodejs.git
   cd audio-analysis-api-nodejs
   ```

2. **Instale as Dependências**:

   ```bash
   npm install
   ```

3. **Crie o Diretório de Uploads**:

   O diretório `uploads` será criado automaticamente pelo serviço de arquivos, mas você pode verificar sua existência.

4. **Inicie o Servidor**:

   ```bash
   npm run start
   ```

   O servidor estará disponível em `http://localhost:3333`.

## Endpoints

### POST /api/audio/analyze

Analisa um arquivo de áudio para verificar se foi gravado por um humano ou gerado por IA.

- **Request**: 
  - Formato: `multipart/form-data`
  - Campo: `audio` (arquivo de áudio)

- **Response**:
  - **200 OK**: `{ "humanRecordedAudio": true }` ou `{ "humanRecordedAudio": false }`
  - **400 Bad Request**: Retorna uma mensagem de erro se nenhum arquivo for enviado.
  - **500 Internal Server Error**: Retorna uma mensagem de erro se ocorrer um problema durante a análise.

## Documentação

A documentação da API é acessível através do Swagger. Visite `http://localhost:3333` para ser redirecionado para `http://localhost:3333/api-docs`.

## Uso do TensorFlow

A API utiliza o TensorFlow.js para análise dos áudios. O modelo de classificação de áudio é carregado a partir do caminho `audio_classifier_model/model.json`. Os áudios são pré-processados para garantir que tenham um tamanho de amostra fixo de 16.000 e são normalizados antes da análise.

## Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Realize suas alterações e faça o commit: `git commit -am 'Adiciona nova feature'`.
4. Envie a branch para o repositório remoto: `git push origin minha-feature`.
5. Abra um pull request no GitHub.

## Contato

Valdir da Silva Alves - [LinkedIn](https://www.linkedin.com/in/valdir-silva-alves)
