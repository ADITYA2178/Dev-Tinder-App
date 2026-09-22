
//Handle Auth Middleware for all GET POST PATCH DELETE Requests
export const adminAuth = (req, res, next) => {
    console.log("Admin Auth is Getting Checked")
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if (!isAuthenticated) {
        res.status(401).send("Unauthorized");
        return;
    }
    next();
};


export const userAuth = (req, res, next) => {
    console.log("User Auth is Getting Checked")
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if (!isAuthenticated) {
        res.status(401).send("Unauthorized");
        return;
    }
    next();
};