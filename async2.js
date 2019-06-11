let responseOrder = [];
const state = {};
let requestOrder = [];

function checkOrder(response,state,requestOrder) {
  
	 if( state[requestOrder[0]]){
		 console.log(state[requestOrder[0]]);
		 if(state[requestOrder[1]]){
			 console.log(state[requestOrder[1]]);
			 if(state[requestOrder[2]]){
				console.log(state[requestOrder[2]]);
			 }
		 }
	 }
   
   
   
  
}



function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = ( Math.round(Math.random() * 1E4 ) % 8000 ) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text,state,requestOrder) {
  responseOrder.push(text);
  
  let eachResponse = checkOrder(responseOrder,state,requestOrder);
   
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
   requestOrder.push(file);
	fakeAjax(file,function(text){
    // what do we do here?
		state[file] = text;
    
	 output(text,state,requestOrder);
  });
  
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");