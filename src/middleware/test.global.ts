// MEMO: https://zenn.dev/coedo/articles/route-middleware-nuxt3ss
export default defineNuxtRouteMiddleware((to, from) => {
  // 遷移先が /test なら最初に遷移
  if (to.path === "/test") {
    return navigateTo("/");
  }
});
