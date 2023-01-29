const statusEl = document.getElementById('status');
const dataEl    = document.getElementById('data');
const headersEl = document.getElementById('headers');
const configEl  = document.getElementById('config');

var valor1 = 0;

// setInterval(()=>{  

//         const now       = new Date;
//         console.log("Imprimiu valor diferente de 1 " ); 
        
//         if ( valor1 != 5 ) {  

//             console.log("Valor atual:  " + valor1 );  

//         } else {
        
//             console.log("Imprimiu valor diferente de 1 " ); 
//             transform()     
             
//         }
//         valor1++   

// }, 1000);

const get = () => {
	
	const config = { 
			params: {
				_limit: 5 
			},
            transformRequest: [function (data, headers) { 
                // Do whatever you want to transform the data
            
                return JSON.data;
              }],
	};

	axios.get('https://jsonplaceholder.typicode.com/posts',config) 
	.then((response)=>renderOutput(response) )
	
    console.log('Legall...');
}
// Comantário
const post = () => {

    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts',data )  
	.then((response)=>renderOutput(response) )

    console.log('Executou o POST'); 
}

const put = () => {
    console.log('put');
}

const patch = () => {
    console.log('patch');
}

const del = () => {
    console.log('delete');
}

const multiple = () => {
    console.log('multiple');
}

const transform = () => {

    const config = { 
			params: {
				_limit: 5 
			},
            transformResponse: [function (data) {
                
                const payload = JSON.parse(data).map( o => {
                    let novonome = '';
                    var Id       = o['id'];

                    if ( Id  == 1) {
                        novonome = "Teste"  
                    }else {

                    } 
                    return {
                        ...o,
                        is_selected: false, 
                        filial : o.title,
                        pedido: o.title, 
                        nome: novonome
                        // title: o.title
                    }
                });
            
                return payload; 
              }],
	};
    console.log('transform');

    axios.get('https://jsonplaceholder.typicode.com/posts',config) 
	.then((response)=>renderOutput(response) )
}

const errorHandling = () => {

    axios.get('https://jsonplaceholder.typicode.com/postsz',config) 
	.then((response)=>renderOutput(response) )
    .catch(function (error) {
        renderOutput(error.response); 
        console.log(error.response);
    });
    console.log('errorHandling');
}

const cancel = () => {
    console.log('cancel');
}

const clear = () => {
    statusEl.innerHTML = '';
    statusEl.className = '';
    dataEl.innerHTML = '';
    headersEl.innerHTML = '';
    configEl.innerHTML = '';
}

const renderOutput = (response) => {
    // Status
    const status = response.status;
    statusEl.removeAttribute('class');
    let statusElClass = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium';
    if (status >= 500) {
        statusElClass += ' bg-red-100 text-red-800';
    } else if (status >= 400) {
        statusElClass += ' bg-yellow-100 text-yellow-800';
    } else if (status >= 200) {
        statusElClass += ' bg-green-100 text-green-800';
    }

    statusEl.innerHTML = status;
    statusEl.className = statusElClass;

    // Data
    dataEl.innerHTML = JSON.stringify(response.data, null, 2);
    Prism.highlightElement(dataEl);

    // Headers
    headersEl.innerHTML = JSON.stringify(response.headers, null, 2);
    Prism.highlightElement(headersEl);

    // Config
    configEl.innerHTML = JSON.stringify(response.config, null, 2);
    Prism.highlightElement(configEl);
}

document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('put').addEventListener('click', put);
document.getElementById('patch').addEventListener('click', patch);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('multiple').addEventListener('click', multiple);
document.getElementById('transform').addEventListener('click', transform);
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('clear').addEventListener('click', clear);
