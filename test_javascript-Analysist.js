/*
**
 * mockup data and functions
**
*/
const results = [
    {typeId: 0, message: 'Message at position number 0'},
    {typeId: 1, message: 'Message at position number 1'},
    {typeId: 2, message: 'Message at position number 2'},
    {typeId: 3, message: 'Message at position number 3'},
    {typeId: 4, message: 'Message at position number 4'},
    {typeId: 5, message: 'Message at position number 5'}
]

const ids = [0, 1, 2, 3, 4, 5];
const excludedTypeId = 1;

async function getDataAsync(id) {
    return new Promise((resolve, error) => setTimeout(()=>{
        if(id == 4) {error("error Stack")}
        else {resolve(results[id])} 
    }, 500))
}

function callback(result){
    console.log('Final results: \n', JSON.stringify(result));
}

/*
**
 * Declaring of the Function
**
*/
async function getData(ids, excludedTypeId, callback) {
    const count = ids.length;
    const result = [];
    for (let i = 0; i < count; i++) {
        try {
            const data =  await getDataAsync(ids[i]);
            console.log(JSON.stringify(data));
            if (data.typeId !== excludedTypeId) {
                result.push(data);
            }
        } catch (error) {
            console.error('Issue with getDataAsync on id ' + ids[i], error);
        }
    }
    callback(result);
}

//* the execution of the function 
getData(ids, excludedTypeId, callback);