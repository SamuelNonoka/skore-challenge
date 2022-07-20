<template>
  <p class="date">
    {{ $moment(date).format('DD MMMM YYYY HH:mm') }}
  </p>
</template>

<script>
export default {
  props: {
    date: { required: true, type: Number }
  }
}
</script>

<style scoped>
.date {
  margin: 8px 0 0;
  color: #2180a7;
  font-size: .8rem;
  font-weight: 700;
}
</style>