const statusEl = document.getElementById('status');
const dataEl    = document.getElementById('data');
const headersEl = document.getElementById('headers');
const configEl  = document.getElementById('config');

var valor1 = 0;

setInterval(()=>{  

        const now       = new Date;
        console.log("Imprimiu valor diferente de 1 " ); 
        
        // if ( valor1 != 5 ) {  

        //     console.log("Imprimiu valor1 " );  

        // } else {
        
        //     console.log("Imprimiu valor diferente de 1 " ); 
        //     get()     
              
        // }
    

}, 1000);

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
	.then( (response)=> renderOutput(response) )
	
    console.log('Legall...');
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