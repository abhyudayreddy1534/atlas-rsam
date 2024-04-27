import { startServer } from './server.js';

(async () => {
  // Could be the demo service or the binning service.
  // Import the method from the desired path.
  await startServer();
})();
