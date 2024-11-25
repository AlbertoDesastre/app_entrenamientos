# 🏋️‍♂️ App de Entrenamientos

Una aplicación web de **Frontend** desarrollada exclusivamente con **Vue** y **TypeScript**. Este proyecto nació como un reto en la asignatura de _Desarrollo Web en Entorno Cliente_, durante el año final del **Ciclo Superior de Desarrollo Web**.

## 🌟 Resumen del Proyecto

La aplicación permite a los usuarios:

- **Registrar y autenticar cuentas.**
- **Gestionar entrenamientos personales**: distancia, tiempo y comentarios.
- **Simular operaciones CRUD** mediante el uso de `localStorage`.

### 📝 Funcionalidades Principales:

1. **Página Inicial:**
   - Acceso a opciones como **Añadir Persona**, **Iniciar Sesión** y **Foro**.
2. **Gestión de Usuarios:**
   - Registro con validación de datos obligatorios: nombre, correo, altura, peso, edad, usuario y contraseña.
   - Ingreso mediante usuario y contraseña, validados contra `localStorage`.
3. **Gestión de Entrenamientos:**
   - Añadir, mostrar, analizar y eliminar entrenamientos.
   - Calcular y mostrar el mejor rendimiento en tiempo, distancia o velocidad.
   - Resumen de métricas totales: distancia y tiempo acumulados.
4. **Foro:**
   - Espacio donde todos los usuarios pueden publicar y visualizar comentarios, con registro de autor, fecha y hora.

## 📋 Requisitos del Proyecto

La solución debía cumplir con los siguientes requisitos establecidos:

1. **Página Inicial:**
   - Acceso a opciones: Añadir persona, Iniciar Sesión y Foro.
2. **Añadir Persona:**
   - Datos requeridos: nombre, correo, altura, peso, edad, usuario y contraseña.
   - Validación obligatoria de cada campo.
3. **Iniciar Sesión:**
   - Autenticación contra usuarios almacenados en `localStorage`.
   - Acceso a opciones exclusivas del usuario validado:
     - Añadir entrenamiento.
     - Mostrar entrenamientos.
     - Mejor entrenamiento (tiempo, distancia o velocidad).
     - Resumen de entrenamientos.
     - Eliminar entrenamientos.
     - Foro.
4. **Gestión de Entrenamientos:**
   - Registro de distancia, tiempo y comentarios.
   - Almacenamiento de datos en `localStorage`.
   - Visualización detallada de entrenamientos.
   - Cálculo de mejores métricas.
5. **Foro:**
   - Registro de comentarios accesibles para todos los usuarios.

---

## 🚀 Instalación y Configuración

Sigue estos pasos para instalar y levantar el proyecto en tu entorno local:

### 1️⃣ Prerrequisitos

Asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Vue CLI](https://cli.vuejs.org/)

### 2️⃣ Clonar el Repositorio

```bash
git clone https://github.com/tu_usuario/app-entrenamientos.git
cd app-entrenamientos
```

### 3️⃣ Instalar Dependencias

```bash
npm install
```

### 4️⃣ Ejecutar la Aplicación en Desarrollo

```bash
npm run serve
```

## 🛠️ Tecnologías Utilizadas

El proyecto ha sido desarrollado con las siguientes tecnologías:

- **Vue.js**
- **TypeScript**
- **CSS**

---

## 📸 Capturas de Pantalla

_EN PROCESO_

## 📄 Licencia

Este proyecto está distribuido bajo la **Licencia MIT**. Esto significa que tienes la libertad de usar, modificar y compartir el código, siempre y cuando se incluya una copia de la licencia original.

---

## 👨‍💻 Autor

**[Alberto Armas]**

- 🐙 [GitHub](https://github.com/AlbertoDesastre)
