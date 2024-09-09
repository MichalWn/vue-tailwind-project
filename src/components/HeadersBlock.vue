<script setup>
</script>

<template>
  <CHeader>
    <CContainer fluid>
      <div class=" text-left  bg-white">
        <div class="p-10 ">
        <h1 class="text-xl text-blue-600 ">Prezentacja firmy</h1>
        <h1 class="text-3xl text-black">ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h1>
        <div class="hidden sm:flex sm:space-x-6 flex-grow ">
            <router-link to="/gallery" class="text-gray-500 hover:text-black text-sm font-medium">Samochody osobowe</router-link>
            <router-link to="/gallery" class="text-gray-500 hover:text-black text-sm font-medium">Samochody dostawcze</router-link>
          </div>
    </div>
     
      </div>
    </CContainer>
  </CHeader>
</template>
