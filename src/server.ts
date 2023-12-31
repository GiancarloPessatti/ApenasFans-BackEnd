import app from "./app";
import "dotenv/config";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(10000, () => {
    console.log("Servidor executando");
  });
})();
