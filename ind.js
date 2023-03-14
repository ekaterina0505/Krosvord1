	var dliny = [5,4,6,3,6,6,3,5];
		var arrayA=["a","b","c","d","e","j","k","l"];
		document.write('<div id="all">'+'<form id="myCros">');
		for (t=0;t<8;t++){
		var so=String(arrayA[t]);
			document.write('<div id="word'+(t+1)+'">'+(t+1));
		for(i=1;i<=dliny[t];i++){
  
			document.write('<input id="'+arrayA[t]+i+'" type="text" maxlength="1" pattern="[А-Яа-яЁё]" onkeyup="f(),chekWord('+(t+1)+')"/>');
			}
			document.write('<span id="otvet'+(t+1)+'"></span>'+'<br>'+'</div>');
		}
	function f(){
		var newid;
		var letters = "abcdejkl";
		var key=window.event;
		var charCode = key.keyCode;
		var pole=document.activeElement;
		var id=pole.id;	
		var pos = letters.indexOf(id.charAt(0));
		if(charCode==116||charCode==16||charCode==18||charCode==17||charCode==8||charCode==123){
			newid=id;
		}else if(charCode==40){
			 newid = letters[(pos + 1)%letters.length] + '1';	
		}		
		else if(charCode==37){
			newid=letters[pos]+(parseInt(id.charAt(1)+id.charAt(2))-1);
			if(newid==letters[pos]+'0'){
				pos=(letters.length - 1 + pos)%letters.length;
				newid=letters[pos]+dliny[pos];
			}
			}
			else if(charCode==39){
				newid=letters[pos]+(parseInt(id.charAt(1)+id.charAt(2))+1);
				if((parseInt(id.charAt(1)+id.charAt(2))+1)==dliny[pos]+1){
					pos=(pos + 1)%letters.length;
					newid=letters[pos]+'1';
				}
		}
		else if(charCode==38){
			newid=letters[(letters.length - 1 + pos)%letters.length]+'1';
		}		
		else{
			 
		 newid=id.charAt(0)+(parseInt(id.charAt(1)+id.charAt(2))+1);	
		if((parseInt(id.charAt(1)+id.charAt(2))+1)==dliny[pos]+1){
					pos=(pos + 1)%letters.length;
					newid=letters[pos]+'1';

				}
			}
		document.getElementById(newid).focus();		
		}
		var answer = ["02e4a79418b49c70f5b9f206e63cb79665124b03495bc8f38326bb4605618647","0611a1b7ac680b4aabc004248affa719f13a9254f7c5c110a54248100323f532",
		"d3286f88eed681f275849552b3b5bec612e98e720e02b1c92fb039e40bac9689","ace57e06ae7e2373584dba1481f9c456bc30abe8a49f1b294d193f34c19ffe2f",
		"48d7918cb145bc43b26c349717989c67367ea1c8bba9b74fb4bc42a160e23442","e81b7048dfab3a5e0276a12c13a665cc2e047fa034c0f5224d904ab9bfb5874b",
		"cc7ac3c9f6aec0673ee6f9a2e3fff40ac1bfce149abe1af851c31a3bb9249722","ccba6448a95cd7fa842435860bb8d70a38e00dd57246e009db7f8c55f664f333"];
	function check(){
		var word=["","","","","","","","",""],kol=0;
		for (q=0;q<8;q++){
			for (y=1;y<=dliny[q];y++){
				word[q]=word[q]+document.getElementById(arrayA[q]+y).value;
			}	
			if(CryptoJS.SHA256(word[q].toLowerCase()).toString() == answer[q]){
				kol++;
			}
		}
		if(kol==8){
			alert("Кросворд решен верно");
		}
		else{
			alert("Кросворд решен не верно");
		}
	   }	
	function chekWord(nomer) {
	 var word="";
	  for (j=1;j<=dliny[nomer-1];j++){
	   var wor=document.getElementById(arrayA[nomer-1]+j).value;
	   word=word+wor;
		    if(CryptoJS.SHA256(word.toLowerCase()).toString() == answer[nomer-1]||CryptoJS.SHA256(word.toLowerCase()).toString() == answer[8]){
			document.getElementById("otvet" + nomer).innerHTML="правильно";
			}else{
			document.getElementById("otvet" + nomer).innerHTML="не правильно";
					}
				}
			}
