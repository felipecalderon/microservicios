const server = require("./server");
const port = process.env.PORT || 4003
server.listen(port, () => {
  console.log(`Server funcionando en puerto: ${port}`);
});