const server = require("./server");
const port = process.env.PORT || 4001
server.listen(port, () => {
  console.log(`Server funcionando en puerto: ${port}`);
});