/**
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
    return arr.filter(element => itemsToExclude.indexOf(element) === -1);
}

difference([2, 1, 5], [2, 3]);
// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
    let grouped = {};

    array.forEach(function (object) {
        if (!grouped.hasOwnProperty(object[value])) {
            grouped[object[value]] = [];
        }

        grouped[object[value]].push(object);
    });

    return grouped;
}

groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender');
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */
function flatten(array) {
    let arrayFlatten = [];

    array.forEach(function (value) {
        if (Array.isArray(value)) {
            value.forEach(function (innerValue) {
                arrayFlatten.push(innerValue);
            })
        } else {
            arrayFlatten.push(value);
        }
    });

    return arrayFlatten;
}

flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

flatten([1, 2, 3, 4, 5]);
// => [1, 2, 3, 4, 5]

flatten([1, [2, 3], 4, 5]);
// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
    let uniq = [];

    array.forEach(function (value) {
        if (uniq.indexOf(value) === -1) {
            uniq.push(value);
        }
    });

    return uniq;
}

uniq([2, 1, 2]);
// => [2, 1]

/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
    let chunks = [],
        i = 0,
        n = array.length;

    while (i < n) {
        chunks.push(array.slice(i, i += size));
    }

    return chunks;
}

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
