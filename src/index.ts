import { Hono } from 'hono';
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new Hono().basePath('/api/v1');


app
  .use(logger())
  .use((c, next) => {
    cors({ origin: "*" })
    return next();
  })




app.get('/me', (c) => {
  return c.json({
    name: "bilal meddah",
    age: 35
  })
})

console.log('@@app started on port 3001')
export default {
  port: 3001,
  fetch: app.fetch,
}
