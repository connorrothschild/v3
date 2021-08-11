<template>
  <div class="p-4 my-3 info-box">
    <div><slot name="info-box"></slot></div>
  </div>
</template>

<style scoped lang="scss">
.info-box::before {
  content: "❕";
  font-size: 1.5rem;
  margin-right: 1rem;
}

.info-box {
  display: flex;
  place-items: center;
  border-radius: 10px;
  font-weight: normal;
  background: rgb(var(--primary), .5);
  box-shadow: 2px 2px 5px 1px rgb(var(--primary-off));

  p:not(:last-of-type) {
    color: rgb(var(--text));
    margin-bottom: 1rem;
  }
}
</style>
