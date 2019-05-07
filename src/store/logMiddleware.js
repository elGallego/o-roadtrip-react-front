// Syntaxe du middleware minimum triple flechée
const logMiddleware = store => next => (action) => {
    // laissé passer les actions que l'on recoit
    next(action);
};

export default logMiddleware;