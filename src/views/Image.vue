<template>
  <div class="about">
    <Hero uid="Ahoj">
      <div
        @click="()=>{$router.push('/about')}"
        style="position:absolute; top: 550px; width:50px; height: 50px; border-radius:50%; background:#F00"
      />
    </Hero>
    <Hero uid="Image">
      <img
        @click="()=>{$router.push('/')}"
        style="position:absolute; top:0; left:0; width:100%; height:450px"
        src="https://picsum.photos/200"
      >
    </Hero>
  </div>
</template>
