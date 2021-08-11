<template>
  <div class="themepicker__btn" v-on:click="changeColors()">
    <span class="themepicker__palette">
      <span class="themepicker__swatch themepicker__swatch--primary"></span>
      <span class="themepicker__swatch themepicker__swatch--secondary"></span>
      <span class="themepicker__swatch themepicker__swatch--text"></span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorSchemes: [
        "blue",
        "red",
        "brown",
        "dark-blue",
        "grey",
        "black" /*, "white", */,
      ],
      currentScheme: "black",
    };
  },
  methods: {
    randomTheme: function () {
      return this.colorSchemes[
        Math.floor(Math.random() * this.colorSchemes.length)
      ];
    },
    changeColors: function () {
      let scheme = this.randomTheme();
      while (scheme == this.currentScheme) {
        scheme = this.randomTheme();
      }
      if (scheme == "blue") {
        document.documentElement.style.setProperty("--base", "0, 0, 0");
        document.documentElement.style.setProperty("--primary", "27,39,51");
        document.documentElement.style.setProperty("--primary-off", "22,29,36");
        document.documentElement.style.setProperty("--secondary", "255,140,0");
        document.documentElement.style.setProperty("--text", "255,255,255");
        document.documentElement.style.setProperty("--text-strong", "245,245,245");
        this.currentScheme = scheme;
      } else if (scheme == "red") {
        document.documentElement.style.setProperty("--base", "0, 0, 0");
        document.documentElement.style.setProperty("--primary", "84,0,0");
        document.documentElement.style.setProperty("--primary-off", "48,0,0");
        document.documentElement.style.setProperty("--secondary", "217,159,0");
        document.documentElement.style.setProperty("--text", "255,255,255");
        document.documentElement.style.setProperty("--text-strong", "245,245,245");
      } else if (scheme == "brown") {
        document.documentElement.style.setProperty("--base", "0, 0, 0");
        document.documentElement.style.setProperty("--primary", "69,69,69");
        document.documentElement.style.setProperty("--primary-off", "85,85,85");
        document.documentElement.style.setProperty("--secondary", "255,94,94");
        document.documentElement.style.setProperty("--text", "255,255,255");
        document.documentElement.style.setProperty("--text-strong", "245,245,245");
      } else if (scheme == "dark-blue") {
        document.documentElement.style.setProperty("--base", "0, 0, 0");
        document.documentElement.style.setProperty("--primary", "43,47,61");
        document.documentElement.style.setProperty("--primary-off", "30,40,61");
        document.documentElement.style.setProperty("--secondary", "46,201,151");
        document.documentElement.style.setProperty("--text", "255,255,255");
        document.documentElement.style.setProperty("--text-strong", "245,245,245");
      } else if (scheme == "grey") {
        document.documentElement.style.setProperty("--base", "0, 0, 0");
        document.documentElement.style.setProperty("--primary", "36,38,41");
        document.documentElement.style.setProperty("--primary-off", "49,51,53");
        document.documentElement.style.setProperty("--secondary", "41,98,255");
        document.documentElement.style.setProperty("--text", "250,250,250");
        document.documentElement.style.setProperty("--text-strong", "255,255,255");
      } else if (scheme == "white") {
        document.documentElement.style.setProperty("--base", "235,235,235");
        document.documentElement.style.setProperty("--primary", "225,228,232");
        document.documentElement.style.setProperty("--primary-off", "235,235,235");
        document.documentElement.style.setProperty("--secondary", "101,2,2");
        document.documentElement.style.setProperty("--text", "28,28,28");
        document.documentElement.style.setProperty("--text-strong", "0,0,0");
      } else if (scheme == "black") {
        document.documentElement.style.setProperty("--base", "0,0,0");
        document.documentElement.style.setProperty("--primary", "15,15,15");
        document.documentElement.style.setProperty("--primary-off", "31,30,30");
        document.documentElement.style.setProperty("--secondary", "0,192,199");
        document.documentElement.style.setProperty("--text", "255,255,255");
        document.documentElement.style.setProperty("--text-strong", "245,245,245");
      }
      this.currentScheme = scheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.themepicker__btn {
  cursor: pointer;
  user-select: none;
  transition: scale 500ms linear;

  &:hover {
    scale: 1.05;
  }
}

.themepicker__swatch {
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgb(var(--text)); // 1px 1px 6px 1px #cecece;

  &--primary {
    background-color: rgb(var(--primary-off));
  }
  &--secondary {
    background-color: rgb(var(--secondary));
  }
  &--text {
    background-color: rgb(var(--text));
  }
}
</style>
