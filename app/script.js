var response = [];

	window.onload = function () {
	 ZOHODESK.extension.onload()
	 .then(async function (App) {
		//Get ticket related data

	let email = await ZOHODESK.get('ticket.email')
				.then(function (res) {
				//response Handling
				 var arr  = []
				for (const element in res)
				{
					arr.push(res[element])
				}
                return arr[0]
			})

	let phone =	await ZOHODESK.get('ticket.phone').then(function (res) {
				//response Handling
				var arr  = []
				for (const element in res)
				{
					arr.push(res[element])
				}
                return arr[0]
			})

	let name =	await ZOHODESK.get('ticket.contactName')
			.then(function (res) {
				//response Handling
				var arr  = []
				for (const element in res)
				{
					arr.push(res[element])
				}
                //console.log(arr[1])
				 return arr[1]
			})

			result = [name,phone,email]
				
			return result
			
	})
	.then(e=>{
		var first_name=e[0]
		var Email=e[2]
		var phone=e[1]
		document.querySelector("body").innerHTML=`<iframe width='100%' height='100%' src='https://cgi-mea.zohobookings.in/portal-embed#/customer/pbsk?First Name=${first_name}&Email=${Email}&Contact Number=${phone}' frameborder='0' allowfullscreen='' > </iframe>`

	})
	



};