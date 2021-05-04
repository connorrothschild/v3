<template>
  <div class="p-4 my-3 info-box">
    <div><slot name="info-box"></slot></div>
  </div>
</template>

<style scoped lang="scss">
.info-box::before {
  content: "❗";
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.info-box {
  display: flex;
  place-items: center;
  border-radius: 10px;
  font-weight: normal;
  background: var(--semitransparent);
  box-shadow: 2px 2px 5px 1px var(--primary-off);

  p:not(:last-of-type) {
    color: var(--text);
    margin-bottom: 1rem;
  }
}
</style>
