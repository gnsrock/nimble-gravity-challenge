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

### Challenges & Solutions 🛠️

During the development of **Step 5 (Job Application)**, I encountered a discrepancy between the provided email documentation and the actual API behavior:

* **API Inconsistency:** The API required an `applicationId` field that was not specified in the initial instructions.
* **Data Type Validation:** The backend enforced strict string typing for ID fields.
* **Resolution:** By performing deep inspection of the API's `fieldErrors` response, I successfully re-mapped the payload to include the required fields, ensuring a successful submission (`{"ok": true}`).

This experience highlighted my ability to perform technical troubleshooting and reverse-engineer API requirements under real-world conditions.
