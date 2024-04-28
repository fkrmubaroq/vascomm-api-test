

export const authMiddleware = async (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    res.status(401).json({
      errors: "Unauthorized"
    }).end();
    return;
  }

  const user = false;
  if (!user) {
    res.status(401).json({
      errors: "Unauthorized"
    }).end(); 
    return;
  }
  req.user = user;
  next();
}