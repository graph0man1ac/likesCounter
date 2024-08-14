import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(cors());
  }

  public init = async () => {
    try {
      this.app.listen(process.env.API_PORT, () => {
        console.log(`Server is started on port ${process.env.API_PORT}`);
      });
      this.app.get("/", (req, res) => {
        res.send("Hello express typescript");
      });
    } catch (error: unknown) {
      const err = error as Error;
      console.log(err.message);
    }
  };
}

export const app = new App();

app
  .init()
  .then(() => {
    console.log("Server is OK");
  })
  .catch(() => {
    console.log("Server is not OK");
  });
