/**
 * Registers a service worker if supported by the browser.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers Using Service Workers}
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          if (process.env.NODE_ENV !== 'production') {
            console.log(`ServiceWorker Registered: ${registration}`);
          }
        })
        .catch((error) => {
          console.error(`ServiceWorker Registration Failed: ${error}`);
        });
    });
  }
}

export default registerServiceWorker;
