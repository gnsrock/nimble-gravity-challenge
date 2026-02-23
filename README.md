# Nimble Gravity - Junior Fullstack Challenge

Professional job application portal built for the Nimble Gravity candidate challenge.

## Tecnologías

- **React**: Library for building the user interface.
- **Vite**: Fast build tool and development server.
- **Axios**: Promised-based HTTP client for API requests.
- **Hooks**: Logic separation using custom hooks (`useChallenge`) for better scalability and cleaner components.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

## Arquitectura

El proyecto sigue una estructura modular:
- `src/hooks`: Contiene la lógica de negocio y peticiones de datos.
- `src/components`: Componentes de UI reutilizables.
- `src/services`: Configuración de clientes de API.
- `src/styles`: Estilos globales y específicos.

### Desafíos y Soluciones 🛠️

Durante el desarrollo del **Paso 5 (Postulación)**, encontré una discrepancia entre la documentación recibida por mail y el comportamiento real de la API:

* **Inconsistencia de la API:** La API requería un campo `applicationId` que no estaba especificado en las instrucciones iniciales.
* **Validación de Tipos de Datos:** El backend exigía estrictamente que los campos de ID fueran enviados como Strings.
* **Resolución:** Mediante una inspección detallada de la respuesta `fieldErrors` de la API, logré re-mapear el payload para incluir los campos requeridos, asegurando una postulación exitosa (`{"ok": true}`).

Esta experiencia resalta mi capacidad para realizar troubleshooting técnico e ingeniería inversa sobre requerimientos de API en condiciones reales.
