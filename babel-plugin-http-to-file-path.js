module.exports = function ({ types: t }) {
    return {
        visitor: {
            StringLiteral(path, state) {
                
                if (path.node.value === "/build/app/") {
                    console.log(path.node);
                    path.replaceWith(
                        t.stringLiteral("." + path.node.value)
                    );
                    console.log("-----------compiled----------");
                    console.log(path.node);
                }
            }
        }
    };
};