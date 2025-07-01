export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed header if any
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};