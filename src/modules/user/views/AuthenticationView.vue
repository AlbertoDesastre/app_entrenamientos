<template>
  <!--
Para hacer uso de las rutas hijas dispuestas en "/auth" es necesario tener, de nuevo, el Router View.
Así se consiguen renderizar ambos componentes dependiendo de la ruta. Por ejemplo:

/auth/register >> RegisterForm || /auth/login >> LoginForm
-->

  <RouterView />
</template>
