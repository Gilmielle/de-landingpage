export function disableScroll() {
  document.body.style.overflow = 'hidden';
  const topScroll = window.pageYOffset || document.documentElement.scrollTop;
  const leftScroll = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = () => {
    window.scrollTo(leftScroll, topScroll);
  };
}
