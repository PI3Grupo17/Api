# Use uma imagem base que inclua o Node.js
FROM node:14

# Defina o diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existirem) para a imagem
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos da aplicação para a imagem
COPY . .

# Exponha a porta em que a aplicação está executando
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
