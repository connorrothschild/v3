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
      colorSchemes: ["blue", "red", "brown", "grey", "white", "black"],
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
        document.documentElement.style.setProperty("--base", "black");
        document.documentElement.style.setProperty("--primary", "#1B2733");
        document.documentElement.style.setProperty("--primary-off", "#161d24");
        document.documentElement.style.setProperty("--secondary", "#FF8C00");
        document.documentElement.style.setProperty(
          "--secondary-bg",
          "#FF8C0020"
        );
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--text-strong", "#f5f5f5");
        this.currentScheme = scheme;
      } else if (scheme == "red") {
        document.documentElement.style.setProperty("--base", "black");
        document.documentElement.style.setProperty("--primary", "#540000");
        document.documentElement.style.setProperty("--primary-off", "#300000");
        document.documentElement.style.setProperty("--secondary", "#d99f00");
        document.documentElement.style.setProperty(
          "--secondary-bg",
          "#d99f0020"
        );
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--text-strong", "#f5f5f5");
      } else if (scheme == "brown") {
        document.documentElement.style.setProperty("--base", "black");
        document.documentElement.style.setProperty("--primary", "#454545");
        document.documentElement.style.setProperty("--primary-off", "#3b3737");
        document.documentElement.style.setProperty("--secondary", "#ff5e5e");
        document.documentElement.style.setProperty(
          "--secondary-bg",
          "#ff5e5e20"
        );
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--text-strong", "#f5f5f5");
      } else if (scheme == "grey") {
        document.documentElement.style.setProperty("--base", "black");
        document.documentElement.style.setProperty("--primary", "#2B2F3D");
        document.documentElement.style.setProperty("--primary-off", "#1e283d");
        document.documentElement.style.setProperty("--secondary", "#2ec997");
        document.documentElement.style.setProperty(
          "--secondary-bg",
          "#2ec99720"
        );
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--text-strong", "#f5f5f5");
      } else if (scheme == "white") {
        document.documentElement.style.setProperty("--base", "white");
        document.documentElement.style.setProperty("--primary", "white");
        document.documentElement.style.setProperty(
          "--primary-off",
          "whitesmoke"
        );
        document.documentElement.style.setProperty("--secondary", "#650202");
        document.documentElement.style.setProperty(
          "--secondary-bg",
          "#65020220"
        );
        document.documentElement.style.setProperty("--text", "#1c1c1c");
        document.documentElement.style.setProperty("--text-strong", "#000000");
      } else if (scheme == "black") {
        document.documentElement.style.setProperty("--base", "black");
        document.documentElement.style.setProperty("--primary", "#0f0f0f");
        document.documentElement.style.setProperty("--primary-off", "#1f1e1e");
        document.documentElement.style.setProperty("--secondary", "#00c0c7");
        document.documentElement.style.setProperty(
          "--secondary-bg",
          "#00c0c720"
        );
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--text-strong", "#f5f5f5");
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
  width: 1.2em;
  height: 1.2em;
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--text); // 1px 1px 6px 1px #cecece;

  &--primary {
    background-color: var(--primary-off);
  }
  &--secondary {
    background-color: var(--secondary);
  }
  &--text {
    background-color: var(--text);
  }
}
</style>
