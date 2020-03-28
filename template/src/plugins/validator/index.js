/* eslint-disable */
import { extend, ValidationProvider, ValidationObserver, validate } from "vee-validate";
import { required, } from "vee-validate/dist/rules";

export default {
  install(Vue) {
    Vue.component("ValidationProvider", ValidationProvider);
    Vue.component("ValidationObserver", ValidationObserver);
    
    extend("required", {
      ...required,
      message: "必填"
    });

    extend("mobile", {
      message: "手機格式錯誤",
      validate: (value) => value.length && /^09\d{8}$/.test(value)
    });
  }
};
