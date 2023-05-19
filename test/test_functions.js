const typeValueExamples = {
    string : 'hello',
    number : 43,
    array : [ 1, 2, 3 ],
    object : { a : 1 },
    boolean : false,
    null: null,
    undefined: undefined
};

const findWrongInputType = (argument) => {
    return Object.entries(typeValueExamples).find(([, val]) => val === argument)[0];
};

const getOtherTypes = (type) => {
    return Object.entries(typeValueExamples).reduce((accumulator, [key, value]) => {
        if (key !== type) 
            accumulator[accumulator.length] = value;
        return accumulator;
    }, []);
};

const testInputType = (func, type, argName, listArgs, argIsArray, wrongInputType, testFunc)  => {
    listArgs.forEach( arg => {
        if (argIsArray) wrongInputType = findWrongInputType(arg);

        testFunc("throws error for non " + type + " argument for input variable " + argName + " when inputting " + wrongInputType, () => {
            // argIsArray is useful for when the input argument is itself an array so it doesn't use the values in the array as different inputs
            arg = argIsArray? [arg] : arg;
            expect(() =>  func(...arg)).toThrow(Error)
        });
    });
};

// simple test to test if all other input types will return errors for functions with one input parameter
export const simpleTypeTest = (func, type, argName, testFunc = test) => {
    const otherTypes = getOtherTypes(type);
    testInputType(func, type, argName, otherTypes, true, null, testFunc);
};

// similar to simpleTypeTest but will accomdate functions with multiple parameters
export const testMultipleArgs = (func, allArgs, testFunc = test) => {

    // The template will allow the code to pass in the arguments not being tested correctly
    const argsTemplate = allArgs.map(arg => typeValueExamples[arg.type]);

    allArgs.forEach((arg, argOrder) => {
        // if argument can be any variable we can choose to skip the test but still have an input
        if (!arg.skip) {

            const otherTypes = getOtherTypes(arg.type);

            otherTypes.forEach((argument) => {

                const wrongInputType = findWrongInputType(argument);

                // skipUndefined is used when an input parameter does not require an input and one is preset
                if (!(wrongInputType === 'undefined' && arg.skipUndefined)) {
                    let newArgs = [...argsTemplate];
                    newArgs[argOrder] = argument;
                    testInputType(func, arg.type, arg.name, [newArgs], false, wrongInputType, testFunc);
                }
            });
        }
    });
};