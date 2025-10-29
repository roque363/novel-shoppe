# 🛍️ NovelShoppe

Desarrollo de una aplicación **SPA (Single Page Application)** en **React + Vite + TypeScript**, que simula una tienda en línea utilizando la **API pública de Platzi Fake Store**.  
Incluye gestión de carrito, modo claro/oscuro, notificaciones interactivas y un diseño modular con componentes reutilizables.

---

## 🚀 Stack Tecnológico

- ⚛️ **React 19 + Vite 7 + TypeScript**
- 🎨 **Tailwind CSS v4 + shadcn/ui** (diseño moderno con modo claro/oscuro)
- 🧠 **Zustand** para el estado global del carrito
- 🔄 **React Query** para manejo de peticiones y caching
- 🧪 **Vitest + React Testing Library** para testing unitario
- 🌐 **Axios** para integración con API REST
- ☁️ **AWS Amplify** para despliegue y CI/CD automatizado

---

## 🌍 Demo

Despliegue en **AWS Amplify**  
🔗 **Deploy:** [https://main.d1wurkdbk7baj1.amplifyapp.com/](https://main.d1wurkdbk7baj1.amplifyapp.com/)

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/roque363/novel-shoppe.git
cd novel-shoppe

# Instalar dependencias
npm install
```

---

## 🔑 Variables de entorno

Crear un archivo **.env** en la raíz con:

```bash
VITE_API_BASE_URL=https://api.escuelajs.co/api/v1
```

---

## 💻 Modo Desarrollo

Iniciar el servidor local:

```bash
npm run dev
```

Aplicación disponible en:  
👉 **http://localhost:5173**

---

## 🧠 Tecnologías y librerías utilizadas

| Librería / Framework           | Uso principal                               |
| ------------------------------ | ------------------------------------------- |
| **React + Vite**               | Renderizado SPA y bundling rápido           |
| **TypeScript**                 | Tipado estricto para mayor mantenibilidad   |
| **React Query**                | Fetching, cache y sincronización de datos   |
| **Zustand**                    | Estado global del carrito y derivados       |
| **Tailwind CSS v4**            | Utilidades modernas con CSS variables       |
| **shadcn/ui**                  | Componentes accesibles y con diseño limpio  |
| **Axios**                      | Cliente HTTP centralizado con interceptores |
| **ESLint + Prettier**          | Estilo y formato de código consistente      |
| **Vitest + React Testing Lib** | Testing unitario de componentes y hooks     |
| **AWS Amplify**                | Hosting y CI/CD automático                  |

---

## 🧱 Estructura del Proyecto

```bash
src/
├─ assets/            # Imágenes, íconos, fuentes
├─ components/
│  ├─ ui/             # Componentes reutilizables (Button, Dialog, Input...)
│  ├─ layout/         # Header, Footer, Sidebar
│  └─ domain/         # ProductCard, ProductDialog, CartDrawer...
├─ hooks/             # React Query & helpers (useProducts, useCategories...)
├─ stores/            # Estado global con Zustand (useCart)
├─ services/          # Integración API (axiosInstance, products, categories)
├─ types/
│  ├─ dto/            # Tipos de respuesta directa de API
│  └─ domain/         # Tipos usados en UI y negocio
├─ providers/         # Contextos globales (ThemeProvider, QueryProvider)
├─ styles/            # Estilos globales (Tailwind + tokens + layouts)
├─ pages/
│  ├─ Home/           # Página principal
│  └─ NotFound/       # 404 genérico
├─ test/              # Setup de Vitest + RTL
├─ main.tsx           # Entry point
└─ vite.config.ts     # Configuración Vite
```

---

## 🧪 Testing

Para correr los tests unitarios:

```bash
npm run test
```

Ejemplo actual:

- `ProductCard.test.tsx`: Verifica renderizado, agregar/eliminar del carrito y estado sincronizado.

---

## ☁️ Despliegue en AWS Amplify

El proyecto se despliega automáticamente desde GitHub.  
**Archivo `amplify.yml`:**

```yaml
version: 1
frontend:
  runtime:
    versions:
      nodejs: 20
  phases:
    preBuild:
      commands:
        - nvm install
        - nvm use
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
```

---

## ✨ Características destacadas

- ✅ UI moderna, minimalista y responsive
- 🌓 Modo claro/oscuro persistente (ThemeProvider)
- 🛒 Gestión de carrito con Zustand
- 🧩 API pública de Platzi Fake Store
- 🔔 Notificaciones con Sonner
- 🧱 Arquitectura modular y escalable
- 🧪 Test unitario en `ProductCard`

---

## 🧑‍💻 Desarrollado por

**Roque Alarcón**  
Frontend Developer – React | TypeScript | UX/UI  
📂 [github.com/roque363](https://github.com/roque363)
