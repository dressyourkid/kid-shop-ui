import Vue from 'vue'
import VueRouter, { Route, RawLocation, NavigationGuard } from "vue-router";
import '@nuxtjs/axios';
// import { AxiosInstance, AxiosRequestConfig } from 'axios'

declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}
