import express from "express";
import cors from "cors";
import { PORT, SECRET } from "./src/config/config.js";
import { connectDB } from "./src/config/db.js";
import productRoute from "./src/routes/productRoute.js";
import categoryRoute from "./src/routes/categoryRoute.js";
import userRoute from "./src/routes/userRoute.js";
import purchaseRoute from "./src/routes/purchaseRoute.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";


const app = express();


if (process.env.NODE_ENV === "development") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}


app.use(
  cors({
    origin: "*", 
    credentials: true, 
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



if (process.env.NODE_ENV !== "test") {
  connectDB();
}



app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/user", userRoute);
app.use("/api/purchase", purchaseRoute);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

export default app;
