const controller = require("../controllers/auth.controller");
const projectController = require("../controllers/project.controller");
const proposalController = require("../controllers/proposal.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", controller.signup);

  app.post("/api/auth/signin", controller.signin);

  app.get(
    "/api/auth/protectedRoute",
    controller.isAuthenticated,
    (req, res) => {
      res.json({ message: "This is a protected route!" });
    }
  );

  app.post("/api/auth/forgotPassword", controller.forgotPassword);
  app.get("/api/auth/resetPassword", controller.resetPassword);
  app.post("/api/auth/resetPassword", controller.updatePassword);

  //project routes
  app.post("/api/auth/projects", projectController.createProject);
  app.get("/api/auth/projects", projectController.getAllProjects);
  app.get("/api/auth/projects/:id", projectController.getProjectById);
  app.put("/api/auth/projects/:id", projectController.updateProjectById);
  app.delete("/api/auth/projects/:id", projectController.deleteProjectById);

  //proposal routes
  app.post("/api/auth/proposal", proposalController.createProposal);
  app.get("/api/auth/proposalByUser", proposalController.getAllProposalsByUser);
  app.get(
    "/api/auth/proposalByProject",
    proposalController.getAllProposalsByProject
  );
  app.get("/api/auth/proposal/:id", proposalController.getProposalById);
  app.put("/api/auth/proposal/:id", proposalController.updateProposalById);
  app.delete("/api/auth/proposal/:id", proposalController.deleteProposalById);
};
