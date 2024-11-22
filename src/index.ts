import { Hono } from "hono";
import { blogRouter } from "./route/blog";
import { userRouter } from "./route/user";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
