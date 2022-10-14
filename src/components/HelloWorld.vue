<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <!--tailwindcss color-->
    <h1 class="text-amber-500">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Vite
      </a>
      +
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Vue 3
      </a>
      +
      <a
        href="https://uno.antfu.me/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        UnoCss (Windi / Tailwind).
      </a>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  top: -10px;
  font-size: 2.6rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
