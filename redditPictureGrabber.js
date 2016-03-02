		

		var div = document.getElementById("images");

		var limit = 100;
		var listType = "new"


		function setLimit(limits){
			
			limit = limits;

		}

		function setType(type){

			listType = type;
		}

		function getImages(sub){

			var myNode = document.getElementById("images");
			while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
			}


			sub = document.getElementById("subinput").value


			$.ajax({

				dataType: "json",

				url: "https://www.reddit.com/r/" + sub + "/" + listType + ".json?limit=" + limit + "&after=t3_10omtd/",

				success: function(data){
					var children = data.data.children;
					for (i = 1; i < data.data.children.length; i++) {

     if( !( contains(children[i].data.url, "gallery") ) && 
     	!( contains(children[i].data.url, "imgur.com/a/") ) )
     	listPics(data, i)
 }


 
}

}) 
		}


		function listPics(data, i){
			var div = document.getElementById("images")
			var content = document.createElement("img");


			var url = data.data.children[i].data.url
			content.src = format(url)
 //content.width = "1024"
 //content.height = "800"
 content.className = "resize"
 var header = document.createElement("h5");
 var t = document.createTextNode(data.data.children[i].data.title);
 header.appendChild(t);
 div.appendChild(header);
 div.appendChild(content);
}

 function format(url){
 	var httpsUrl = ""
	// if(url.startsWith("http:") || !url.startsWith("http"))
 //			httpsUrl = "https" + url.substring(4);
// else
httpsUrl = url

if(contains(httpsUrl, "imgur") &&  (!contains(httpsUrl, ".gif")) &&(!httpsUrl.endsWith(".jpg") || !httpsUrl.endsWith(".png") ) ){
	httpsUrl = httpsUrl + ".png";
}
return httpsUrl;

}

function contains(src, sub){
	return src.indexOf(sub) > -1

}


