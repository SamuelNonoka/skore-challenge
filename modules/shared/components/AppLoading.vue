<template>
  <div class="loading">
    <div class="background"></div>
    <div class="content">
      <div class="loader"></div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: .7;
}

.content {
  position: relative;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #5f4b8b;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  -webkit-animation: spin-68cc6380 1.5s linear infinite;
  animation: spin-68cc6380 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>