import { app } from "./src/app.js";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
