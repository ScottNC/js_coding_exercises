export const testInputType = (func, type, argName, listArgs, argIsArray = true, argOrder = 0, testFunc = test)  => {
    testFunc("throws error for non " + type + " argument", () => {
        expect(() => {
            func(...Array(argOrder).fill(null));
        }).toThrow(argName + " is required");

        listArgs.forEach( arg => {
            arg = argIsArray? [arg] : arg;
            expect(() =>  func(...arg)).toThrow(argName + " must be " + type)
        });
    });
}