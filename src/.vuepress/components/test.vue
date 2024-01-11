<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Custom Page',
      content: 'This is the content of my custom page.',
    };
  },
};
</script>

<style scoped>
/* Your custom styles go here */
</style>