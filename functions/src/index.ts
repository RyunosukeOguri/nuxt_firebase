import * as functions from 'firebase-functions';
import * as Express from 'express';
import { Nuxt } from 'nuxt';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = Express();
const nuxt = new Nuxt({
  dev: false,
  buildDir: 'nuxt',
  build: {
      publicPath: '/assets/'
  }
});
// app.get(
//     '/',
//     (req: Express.Request, res: Express.Response) => {
//         return res.send('Hello world.');
//     });

// app.listen(
//     3000,
//     () => {
//         console.log('Example app listening on port 3000!');
//     });

export const handleRequest = (req, res) => {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  return new Promise((resolve, reject) => {
      nuxt.render(req, res, (promise) => {
          promise.then(resolve).catch(reject);
      });
  });
}

app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app);

export default app;
