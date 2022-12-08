// Funcion agregar resultados a un array
export const getResults = (constArray, resultsArray, states, index) => {
    constArray.map((j) => {
        return resultsArray[Object.keys(resultsArray)[index]].push(Math.round((j * states[index]) * 100) / 100)
    })
};

// Funcion para sumar los contenidos de cada array de resultados
export const totalResult = (index, resultsArray,) => (
    resultsArray[Object.keys(resultsArray)[index]].reduce((acc, val) => { return Math.round((acc + val) * 100) / 100 }, 0)
);




