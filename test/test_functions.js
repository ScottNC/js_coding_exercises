const testInputType = (func, type, argName, listArgs, argIsArray, argOrder, testFunc)  => {
    testFunc("throws error for non " + type + " argument", () => {
        expect(() => {
            // we want to test if specific argument is undefined so we will fill the previous arguments with null
            func(...Array(argOrder).fill(null));
        }).toThrow(argName + " is required");

        listArgs.forEach( arg => {
            // argIsArray is useful for when the input argument is itself an array so it doesn't use the values in the array as different inputs
            arg = argIsArray? [arg] : arg;
            expect(() =>  func(...arg)).toThrow(argName + " must be " + type)
        });
    });
}

const typeValueExamples = {
    string : 'hello',
    number : 43,
    array : [ 1, 2, 3 ],
    object : { a : 1 },
    boolean : false,
    null: null
};

const allTypes = Object.keys(typeValueExamples); 

// this creates a map of what input type we're testing so it tests all the other input types
// for example {string: [43, [1,2,3] ...]}
const typeToArguments = allTypes.reduce((allDifferentTypes, key) => {
    const typeObject = ['array', 'null']
    // typeof(array) will output object so we want to avoid including arrays when testing objects
    allDifferentTypes[key] = allTypes.filter((key2) => key2 !== key && !(key === 'object' && typeObject.indexOf(key2) + 1));
    allDifferentTypes[key] = allDifferentTypes[key].map((type => typeValueExamples[type]))
    return allDifferentTypes;
}, {});

// easy to write test
export const simpleTypeTest = (func, type, argName, testFunc = test) => {
    testInputType(func, type, argName, typeToArguments[type], true, 0, testFunc);
};

export const testMultipleArgs = (func, allArgs, testFunc = test) => {

    // The template will allow the code to pass in the arguments not being tested correctly
    const argsTemplate = allArgs.map(arg => typeValueExamples[arg.type]);

    allArgs.forEach((arg, argOrder) => {
        // if argument can be any variable we can choose to skip the test but still have an input
        if (!arg.skip) {
            typeToArguments[arg.type].forEach((argument) => {
                let newArgs = [...argsTemplate];
                newArgs[argOrder] = argument;
                testInputType(func, arg.type, arg.name, [newArgs], false, argOrder, testFunc);
            });
        }
    });
};