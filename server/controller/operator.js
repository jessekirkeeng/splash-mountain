module.exports = {
  webData: async (req, res) => {
	try{
		const web3 = new Web3(Web3.givenProvider || "http://localhost:3131");
		const network = await web3.eth.net.getNetworkType();
		const accountNumber = await web3.eth.getAccounts()
		// .then(({data}) => setAccount(data))
		// console.log('account:', accountNumber[0])		
} catch (err) {
	console.log(err)}
}}