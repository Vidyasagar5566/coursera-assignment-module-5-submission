var name = ["Ramana","vidya","joe","sagar","Jhon","jogesh","srinivas Chandu","Jagadesh"];
for (var pop in name) {
	if (pop[0] == "j" || pop[0] == "J") {
		console.log("Goodbye " + pop);
	}
	else {
		console.log("Hello " + pop);
	}
}