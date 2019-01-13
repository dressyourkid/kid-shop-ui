import Vue from 'vue'
import VueRouter, { Route, RawLocation, NavigationGuard } from "vue-router";

declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}
