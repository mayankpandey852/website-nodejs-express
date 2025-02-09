// import express from "express";
// import speakerRoutes from "./speakers.js";
// import feedbackRoutes from "./feedback.js";

// export default function createRouter({ feedbackService, speakerService }) {
//     const router = express.Router();

//     router.get("/", (req, res) => {
//         res.render("pages/index", { pageTitle: "Welcome" });
//     });

//     router.use("/speakers", speakerRoutes); // Do not pass params here
//     router.use("/feedback", feedbackRoutes);

//     return router;



// }


import express from "express";
import speakerRoutes from "./speakers.js";
import feedbackRoutes from "./feedback.js";

export default function createRouter({ feedbackService, speakerService }) {
    const router = express.Router();

    router.get("/", (req, res) => {
      
        res.render("pages/index", { pageTitle: "Welcome" });
    });

    router.use("/speakers", speakerRoutes(speakerService));
    router.use("/feedback", feedbackRoutes(feedbackService)); // ✅ Pass feedbackService

    return router;
}
