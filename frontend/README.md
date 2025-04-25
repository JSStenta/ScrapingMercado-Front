# Vite + Deno + Vue 3 + TypeScript

## Descripción

Este proyecto es una aplicación frontend desarrollada con **Vue 3**, **Vite** y **TypeScript**, utilizando **Deno** como entorno de ejecución. Permite buscar y comparar precios de productos en diferentes supermercados.

## Requisitos Previos

- Tener **Deno**. [Guía de instalación de Deno](https://deno.land/manual/getting_started/installation).
- Tener configurado un backend compatible que sirva los datos necesarios. Puedes encontrar el backend en el directorio [ScrapingMercado-Back](https://github.com/JSStenta/ScrapingMercado-Back).

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JSStenta/ScrapingMercado-Front.git
   cd ScrapingMercado-Front/frontend
   ```

2. Instala las dependencias necesarias:
   ```bash
   deno task dev
   ```

## Ejecución

Para iniciar el servidor de desarrollo, ejecuta:

```bash
deno task dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue

Para construir los activos de producción, ejecuta:

```bash
deno task build
```

Los archivos generados estarán en el directorio `dist`.

## Estructura del Proyecto

```plaintext
src/
├── components/         # Componentes reutilizables de Vue
├── data/               # Datos estáticos como supermercados y opciones de ordenamiento
├── hooks/              # Hooks personalizados para lógica reutilizable
├── services/           # Servicios para interactuar con la API
├── store/              # Almacenamiento global con Pinia
├── types/              # Definiciones de tipos TypeScript
├── views/              # Vistas principales de la aplicación
└── assets/             # Archivos estáticos como estilos y fuentes
```

## Funcionalidades Principales

- **Búsqueda de productos**: Permite buscar productos en múltiples supermercados.
- **Filtros y ordenamiento**: Filtra y ordena los resultados por precio, nombre, etc.
- **Descuentos**: Aplica descuentos personalizados a los productos seleccionados.
- **Interfaz intuitiva**: Diseñada para facilitar la comparación de precios.

## Configuración

### Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo `.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Esto asegura que la aplicación pueda comunicarse con el backend.

## Contribución

Las contribuciones son bienvenidas. Si encuentras un error o tienes sugerencias, abre un _issue_ o envía un _pull request_.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).