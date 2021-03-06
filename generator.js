module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build --mode prod",
      lint: "vue-cli-service lint"
    },
    dependencies: {    
      "axios": "^0.19.2",
      "core-js": "^3.6.4",
      "vee-validate": "^3.2.5",
      "vue": "^2.6.11",
      "vue-i18n": "^8.15.7",
      "vue-router": "^3.1.5",
      "vuex": "^3.1.2"
    },
    devDependencies: {
      "@babel/parser": "^7.7.5",
      "@vue/cli-plugin-babel": "^4.2.0",
      "@vue/cli-plugin-eslint": "^4.2.0",
      "@vue/cli-plugin-router": "^4.2.0",
      "@vue/cli-plugin-vuex": "^4.2.0",
      "@vue/cli-service": "^4.2.0",
      "@vue/eslint-config-standard": "^5.1.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^6.7.2",
      "eslint-plugin-import": "^2.20.1",
      "eslint-plugin-node": "^11.0.0",
      "eslint-plugin-promise": "^4.2.1",
      "eslint-plugin-standard": "^4.0.0",
      "eslint-plugin-vue": "^6.1.2",
      "lint-staged": "^9.5.0",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.2",
      "stylelint": "^13.3.3",
      "stylelint-config-prettier": "^8.0.1",
      "stylelint-config-sass-guidelines": "^7.0.0",
      "stylelint-config-standard": "^20.0.0",
      "stylelint-order": "^4.0.0",
      "stylelint-scss": "^3.17.2",
      "vue-template-compiler": "^2.6.11"
    },
    gitHooks: {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.{js,vue}": ["vue-cli-service lint", "git add"]
    }
  });
  api.render("./template");
};
