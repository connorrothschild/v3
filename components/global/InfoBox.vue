<template>
  <div class="p-4 my-3 info-box">
    <!-- <img src="~/assets/icons/exclamation.png" alt="Note" /> -->
    <div><slot name="info-box"></slot></div>
  </div>
</template>

<style scoped lang="scss">
// img {
// 	max-width: 30px;
// 	max-height: 30px;
// 	margin-right: 1em;
// }
.info-box {
  display: flex;
  place-items: center;
  border-radius: 10px;
  font-weight: normal;
  background: $semitransparent;
  box-shadow: 2px 2px 5px 1px $primary-off;

  p:not(:last-of-type) {
    color: $text;
    margin-bottom: 1rem;
  }
}
</style>
