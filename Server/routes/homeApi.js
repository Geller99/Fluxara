


const homeRoute = {
    path: "/",
    method: "get",
    handler: async (request, result) => {
      result.send("<h1> Hello Server </h1>") 
    },
  };

  module.exports = {
      homeRoute,
  }