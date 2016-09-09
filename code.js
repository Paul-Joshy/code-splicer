var inp = document.getElementById("inp");
var out = document.getElementById("out");
var str = "";
var formattedStr = "";
console.log(inp);
inp.onkeyup = function()
{
	str = inp.value;
	str = str.toUpperCase();
	for(var i = 0;i <= str.length; i++)
	{
		if(str.charAt(i) === 'A' || str.charAt(i) === 'G' || str.charAt(i) === 'C' || str.charAt(i) === 'T' || str.charAt(i) === 'U')
			formattedStr += str.charAt(i);
	}
	console.log(formattedStr);
	out.innerHTML = formattedStr;
	formattedStr = "";
};
