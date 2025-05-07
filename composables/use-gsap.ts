export default () => {
  const nuxtApp = useNuxtApp();

  return {
    gsap: nuxtApp.$gsap,
    ScrollToPlugin: nuxtApp.$ScrollToPlugin,
    ScrollSmoother: nuxtApp.$ScrollSmoother
  };
}