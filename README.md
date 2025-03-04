# Pokédex

Una aplicación web moderna para explorar y descubrir información sobre Pokémon, construida con React y NestJS.

- Web: https://mkaszp3yju.us-east-1.awsapprunner.com/
- Server: https://a3cp4nf6m4.us-east-1.awsapprunner.com/api
- Swagger: https://a3cp4nf6m4.us-east-1.awsapprunner.com/docs

## 🚀 Características

- Listado de Pokémon con paginación
- Vista detallada de cada Pokémon con estadísticas
- Búsqueda en tiempo real
- Interfaz responsive y moderna
- Caché optimizada para mejor rendimiento
- Sistema de caché en servidor para optimizar llamadas a la PokeAPI

## 🛠️ Tecnologías Utilizadas

- **Frontend:**

  - React + TypeScript
  - Mantine UI (componentes y sistema de diseño)
  - TanStack Query (manejo de estado y caché)
  - Zustand (gestión de estado global)

- **Backend:**

  - NestJS + TypeScript
  - Cache Manager para optimización
  - Swagger para documentación de API
  - Class Validator y Class Transformer
  - Axios para llamadas HTTP
  - Joi para validación de configuración

- **Herramientas de Desarrollo:**
  - Vite (Frontend)
  - ESLint + Prettier
  - Turborepo (monorepo)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone "https://github.com/anagotoyas/pokedex.git"
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

```bash
# En /apps/server/.env
NODE_ENV="development"
PORT=3000
POKE_API_URL="https://pokeapi.co/api/v2/pokemon"
DEFAULT_LIMIT=10
```

```bash
# En /apps/web/.env
VITE_BASE_URL="http://localhost:3000/api"
VITE_DEFAULT_LIMIT=10
```

4. Inicia los servidores de desarrollo:

```bash
npm run dev
```

- El frontend estará disponible en `http://localhost:5173`
- El backend estará disponible en `http://localhost:3000/api`
- La documentación Swagger estará en `http://localhost:3000/docs`

## 🤔 Decisiones Técnicas

1. **Arquitectura por Características (Feature-based):**

   - Organización modular para mejor mantenibilidad
   - Separación clara de responsabilidades

2. **Gestión de Estado y Caché:**

   - Zustand para estado global simple y eficiente
   - React Query para caché en cliente
   - Cache Manager en servidor para optimizar llamadas a PokeAPI

3. **Optimizaciones de Rendimiento:**

   - Implementación de debounce en búsquedas
   - Sistema de caché en dos niveles (cliente y servidor)

4. **UI/UX:**
   - Sistema de diseño consistente con Mantine
   - Skeletons para estados de carga
   - Animaciones suaves para mejor feedback

## 📝 Notas Adicionales

- La aplicación utiliza variables de entorno para configuración
- Sistema de caché implementado en ambos frontend y backend para optimizar rendimiento
- Documentación de API disponible vía Swagger
- Los componentes están diseñados para ser reutilizables y mantenibles
