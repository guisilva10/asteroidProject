# 📌 Guia de Configuração e Alterações no Projeto

## 🛠 Instalação e Configuração

### 1️⃣ Instalação do Vite

Se o projeto ainda não foi criado, utilize o seguinte comando para criar um novo projeto com Vite:

```sh
npm create vite@latest meu-projeto --template react
cd meu-projeto
npm install
```

### 2️⃣ Instalação do Tailwind CSS

```sh
npm install tailwindcss @tailwindcss/vite
npx tailwindcss init -p
```

Edite o arquivo `vite.config.js` e adicione os caminhos corretos:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

Adicione Tailwind ao seu arquivo `globals.css`:

```css
@import "tailwindcss";
```

### 3️⃣ Instalação do Prettier e Plugin do Tailwind

```sh
npm install -D prettier prettier-plugin-tailwindcss
```

Crie o arquivo `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## 🎨 Atualizações nos Componentes

### 🔹 **Navbar**

Foi melhorada para um design responsivo utilizando Tailwind CSS.

### 🔹 **Footer**

Agora tem um design mais moderno, com uma melhor distribuição dos elementos.

### 🔹 **LoadingHome**

Agora exibe um ícone de foguete animado com `lucide-react`:

```sh
npm install lucide-react
```

Código atualizado:

```jsx
import { Rocket } from "lucide-react";

const LoadingHome = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Rocket className="w-16 h-16 text-blue-500 animate-bounce" />
    </div>
  );
};

export default LoadingHome;
```

### 🔹 **Página "Sobre Mim"**

Melhorada para melhor legibilidade e responsividade.

### 🔹 **Página "Detalhes do Asteroide"**

Agora possui um design mais organizado e limpo, melhorando a exibição dos dados.

### 🔹 **Página "Não Encontrada"**

Agora exibe uma mensagem mais amigável e um botão estilizado para voltar à página inicial:

```jsx
import img from "../assets/duvida.png";
import { Link } from "react-router-dom";

const NaoEncontrada = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src={img} alt="Página não encontrada" className="w-24 mb-4" />
      <h1 className="text-3xl font-semibold text-gray-800">
        Página Não Encontrada
      </h1>
      <p className="text-gray-600 mt-2">
        Oops! Parece que essa página não existe.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
};

export default NaoEncontrada;
```

## 🚀 Conclusão

Essas melhorias tornaram o projeto mais responsivo, moderno e organizado. Caso precise de mais alterações, basta ajustar os componentes conforme necessário! 🎯
