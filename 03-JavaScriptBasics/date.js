function dzien() {
	//var data = new Date(Date.UTC(96, 11, 1, 0, 0, 0));  data od któregoś okresu
	var data = new Date().toDateString();
	confirm(data);
	}
document.getElementById('button').onclick = dzien;
