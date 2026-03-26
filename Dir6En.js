function Print6(no,d1,c1,d2,c2,d3,c3,d4,nourut){
	function RandomAngkaAtoB(a,b){ 
		var r = a+Math.ceil(Math.random() * b);
		return r;
	}
	function RandomMyArray(Arr){
		for (var i=0; i<Arr.length; i++){
			var r = Math.floor(Math.random() * Arr.length);
			var a = Arr[i];
			Arr[i] = Arr[r];
			Arr[r] = a;
		}
		return Arr
	}
	function NoJawabanBenar(Arr, jwb){
		for (var i=0; i<Arr.length; i++){
			if (Arr[i]==jwb){
				return i;
				break;
			}
		}
	}
	function GetABCD(no){
		var ABCD = ["A","B","C","D"]
		return ABCD[no]
	}
	function Mods(m,n){
		var m0b = m;
		var m0 = m;
		var ct = 0;
		do{
			m0b = m0;
			m0-=n;
			ct++;
		}while(m0>=0);
		
		var sisa = Math.abs(m0b);
		return sisa;
	}
	function SplitString(ff){
		var gg = new Array();
		var strff = ""+ff;
		var len = strff.length;
		for (var i=0; i<len; i++){
			gg.push(strff.substr(i,1));
		}
		return gg;
	}
	function StringRibuan(str){
		var strfix = "";
		var arfix = new Array();
		var StrArray = SplitString(str);
		for (var i=0; i<StrArray.length; i++){
			arfix.push(StrArray[i]);
		}
		var ct = 0;
		var m = 0;
		var n = 0;
		var ctmax = StrArray.length;
		var arct = new Array();
		for (var i=StrArray.length-1; i>=0; i--){
			ct++;
			ctmax--;
			if(ct==3){
				ct = 0;
				m++;
				arct.push(3);
			}
		}
		var n = StrArray.length - 3*arct.length;
		var iter=-1;
		strfix="";
		for (var i=0; i<n; i++){
			iter++;
			strfix += arfix[iter];
		}
		if (n>0)
			strfix += ",";
		for (var i=0; i<m; i++){
			for (j=0; j<3; j++){
				iter++;
				strfix += arfix[iter];
			}
			strfix += ",";
		}
		var leng = strfix.length;
		strfix = strfix.substr(0, leng-1);
		return strfix
	}
	function NamaTokoh(){
		var Tokoh = ["Galih", "Endah", "Syauqi", "Kayyisah", "Fadly", "Dyah", "Wurry", "Uyi", "Imi", "Ewi", "Dina", "Reggy", "Abi"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function NamaTeksBulan(n){
		var TeksBulan = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty"];
		return TeksBulan[n-1];
	}
	function NamaToko(){
		var Tokoh = ["Electronic City", "Ace Hardware", "Informa", "Eraspace", "Bhinneka", "Hartono Elektronik", "UFO Elektronika", "Best Denki"];
		Tokoh = RandomMyArray(Tokoh);
		return Tokoh;
	}
	function StringDesimal(ff){
		var strff = ""+ff;
		const gg = strff.split(".");
		if(gg.length==2)	return gg[0]+"."+gg[1];
		else 				return ff
	}
	function insert(){
		var src = document.getElementById("aritmatika1");
		var img = document.createElement("img");
		var imgsrc = [	"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVbrzx7EHuujd4knWmRbcOhs5LrRfTqhzlnHPkbRhysznToPg6pIBxjUqrSzhHAAocJlsfs-VClM0yHMV1Mfxv3wGvysJuoXAZYRp8vgVkV3RVTSANR11DiDG6qwi8oVwUXTIFRE_qJd9nLTp4sYHSzor5eni90MszR3pJMkIEw6GEMraKZQRkf_uOPSE/s320/01.png",
						"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRy7xgsPRQE4bgrMs5h4k6z3XHrVraQ_mEL6rYhC3T7dMDu0O8uyEaBVvUSeXdRvpW0bEMsp1ZKfTEk8XudpHJSAoY7ipDr2L_XvRjcZQ0_uQeJKcYvwdIWJoGWWB9w8ZiupUHid5d0EnaQJoNIEXe7GuHjFFjs2Cu0uMXMkkbPnUPgekOmx7XHjBxA8Y/s320/02.png",
						"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZVaFgYHmmylii6d6_F4Bj41UMKSRyIFeLbBLQ3BLmOZ4rY3-ZsdTvAc0WHDxgcN90gmaijxddej3VxSqMHTgJAbozMUsspUpF-FX1a0CU-QWBpDg-pyCfkb-AV6r-MQ7lECokxLBjzZ0TONsSVtsCXES5R2EwLcDk5gO1GA0PRTnlggAOAdy88QVvjUY/s320/03.png",
						"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjySA1VanisRgVTApdG6KlD-6JPWrAeyX5gs_1TPFEsuWPLiqLDxz-NtNMFtrgFmjrXoLQApGRjWfpwAg5BQrudt4Hn4IB9PsY67mmAQE39fAhtfIPsAaSFCULBL1wguPrHX_4VpURYzviP_-cgV0NZx2lPww85aA2OTrNlq_bHz0luTN7DhlqrD9hX7BU/s320/004.png"];
		
		var angka = [0,1,2,3]
		var nama = [["A","B","C","D","E","F","G","H"],["P","Q","R","S","T","U","V","W"],["A","B","C","D","E","F","G","H"],["P","Q","R","S","T","U","V","W"]]
		angka = RandomMyArray(angka);
		//console.log(imgsrc[angka[0]]);
		img.src = imgsrc[angka[0]];
		src.appendChild(img);
		img.height = 150;
		return nama[angka[0]];
	}
	function MyAritmatika1(){
		var modal = 1000000*RandomAngkaAtoB(5,20);
		var arrPersen = [3,6,9,12,15,18,21,24,27,30];
		arrPersen = RandomMyArray(arrPersen);
		var persen = arrPersen[0];
		var arrBulan = [3,6,9,12,15,18,21,24];
		arrBulan = RandomMyArray(arrBulan);
		var bln = arrBulan[0];
		var hasil = (bln/12)*(1*modal+persen*modal/100);
		return [modal,persen,bln,hasil];
	}
	function MyAritmatika2(){
		var modal = 1000000*RandomAngkaAtoB(5,20);
		var arrPersen = [3,6,9,12,15,18,21,24,27,30];
		arrPersen = RandomMyArray(arrPersen);
		var persen = arrPersen[0];
		var arrBulan = [3,6,9,12,15,18,21,24];
		arrBulan = RandomMyArray(arrBulan);
		var bln = arrBulan[0];
		var hasil = (bln/12)*(1*modal+persen*modal/100);
		return [modal,persen,bln,hasil];
	}
	function MyAritmatika3(){
		var modal = 1000000*RandomAngkaAtoB(5,20);
		var arrPersen = [3,6,9,12,15,18,21,24,27,30];
		arrPersen = RandomMyArray(arrPersen);
		var persen = arrPersen[0];
		var arrBulan = [3,6,9,12,15,18,21,24];
		arrBulan = RandomMyArray(arrBulan);
		var bln = arrBulan[0];
		var hasil = (bln/12)*(1*modal+persen*modal/100);
		return [modal,persen,bln,hasil];
	}
	function MyAritmatika4(){
		var modal = 10000*RandomAngkaAtoB(5,20);
		var arrPersen = [3,6,9,12,15,18,21,24,27,30];
		arrPersen = RandomMyArray(arrPersen);
		var persenrugi = arrPersen[0];
		var hasil = (1*modal-persenrugi*modal/100);
		return [modal,persenrugi,hasil];
	}
	function Myaritmatika5(){
		var modal = 10000*RandomAngkaAtoB(5,20);
		var arrPersen = [3,6,9,12,15,18,21,24,27,30];
		arrPersen = RandomMyArray(arrPersen);
		var persenrugi = arrPersen[0];
		var hasil = (1*modal-persenrugi*modal/100);
		return [modal,persenrugi,hasil];
	}
	function HargaProperti5(nmcanvas){
		do{
			var Persen1 = [25,20,15,10];
			var Persen2 = [25,20,15,10];
			do{
				var Harga1 = 100000*RandomAngkaAtoB(5,20);
				var Harga2 = 100000*RandomAngkaAtoB(5,20);
			}while(Harga1==Harga2);
			Persen1 = RandomMyArray(Persen1);
			Persen2 = RandomMyArray(Persen2);
			var hasil=[0,0,0,0]
			for(var i=0;i<4;i++){
				hasil[i] = Harga1*Persen1[i]/100+Harga1 + Harga2*Persen2[i]/100+Harga2;
			}
			var ff1 = hasil[0]==hasil[1] || hasil[0]==hasil[2] || hasil[0]==hasil[3];
			var ff2 = hasil[1]==hasil[2] || hasil[1]==hasil[3];
			var ff3 = hasil[2]==hasil[3];
			var ff = ff1 || ff2 || ff3;
		}while(ff)
		var termurah = 0;
		var awal = hasil[0];
		for(var i=1;i<4;i++){
			if(hasil[i]<awal){
				awal = hasil[i];
				termurah = i;
			}
		}
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		// menambahkan image pada canvas //
		let base0_image = new Image();
		//base0_image.src = "data:image/png;base64,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";
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcYAAAB8CAIAAAB8JofZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTExNDYxNjI1RjcxMUYxQUJCMUJENDA0OTBEMEEwNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTExNDYxNzI1RjcxMUYxQUJCMUJENDA0OTBEMEEwNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MTE0NjE0MjVGNzExRjFBQkIxQkQ0MDQ5MEQwQTA0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1MTE0NjE1MjVGNzExRjFBQkIxQkQ0MDQ5MEQwQTA0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49SKrgAAIKFJREFUeNrsnX9YU1e6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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			ctx.fillText(Persen1[0]+"%",220,83);
			ctx.fillText(Persen1[1]+"%",285,83);
			ctx.fillText(Persen1[2]+"%",350,83);
			ctx.fillText(Persen1[3]+"%",415,83);
			ctx.fillText(Persen2[0]+"%",220,113);
			ctx.fillText(Persen2[1]+"%",285,113);
			ctx.fillText(Persen2[2]+"%",350,113);
			ctx.fillText(Persen2[3]+"%",415,113);
			ctx.fillText("IDR"+StringRibuan(Harga1)+".00",127,83);
			ctx.fillText("IDR"+StringRibuan(Harga2)+".00",127,113);
		}
		
		return termurah;
	}
	function Myaritmatika6(){
		// 300*hj1 + 200*hj2 = hb1*500*102/100*120/100
		//hj2 = (hb1*500*102/100*120/100 - 300*hj1)/200;
		var arrhb = [1000,2000,4000,5000,7000,8000];
		arrhb = RandomMyArray(arrhb);
		var hb = arrhb[0];//1000*RandomAngkaAtoB(0,9);
		var hj1 = hb + 100*RandomAngkaAtoB(0,9);
		var arrpct1 = [2,4];
		var arrpct2 = [10,15,20,25,30];
		arrpct1 = RandomMyArray(arrpct1);
		arrpct2 = RandomMyArray(arrpct2);
		var pctbiaya = arrpct1[0];//2;
		var pctuntung = arrpct1[0]*10;//20;
		var ntot = 500;
		var n1 = 300;
		var n2 = ntot-n1;
		var hj2 = (hb*ntot*(100+pctbiaya)/100*(100+pctuntung)/100 - n1*hj1)/n2;
		hj2 = Math.round(hj2);
		
		return [hb,hj1,hj2,n1,n2,ntot,pctbiaya,pctuntung];
	}
	function Myaritmatika7(){
		var a1 = 100;
		var arrpc = [20,30,40,50];
		arrpc = RandomMyArray(arrpc);
		var pc1 = arrpc[0];//30;
		var pc2 = arrpc[1];//40;
		var hasil = Math.round(a1*(100+pc1)*(100-pc2)/10000);
		var benar = a1-hasil;
		var teksbenar;
		//teksbenar = "Mengalami pengurangan sebesar "+Math.abs(benar)+"% dari nilai awal.";
		teksbenar = "There is a reduction of "+Math.abs(benar)+"% from the initial value.";
		//if(benar<0)	teksbenar = "Mengalami pengurangan sebesar "+Math.abs(benar)+"% dari nilai awal.";
		//else		teksbenar = "Mengalami penambahan sebesar "+Math.abs(benar)+"% dari nilai awal.";
		var salah1 = a1-Math.round(a1*(pc1)*(100-pc2)/10000);
		var salah2 = a1-Math.round(a1*(100+pc1)*(pc2)/10000);
		var salah3 = a1-Math.round(a1*(pc1)*(pc2)/10000);
		
		return [a1,pc1,pc2,benar,salah1,salah2,salah3];
	}
	function Myaritmatika8(){
		var tara = RandomAngkaAtoB(0,7);
		var neto = 100+RandomAngkaAtoB(0,9);
		var bruto = neto+tara;
		
		return [bruto,neto,tara];
	}
	function Myaritmatika9(){
		var harga1 = 1000*RandomAngkaAtoB(4,7);
		var neto = 10*RandomAngkaAtoB(0,20);
		var harga = neto*harga1;
		var pctuntung = RandomAngkaAtoB(19,11);
		var untung = Math.round(harga*(pctuntung+100)/100);
		var hargajual = Math.round(harga1*(pctuntung+100)/100);
		return [harga1,neto,pctuntung,harga,hargajual];
	}
	function Myaritmatika10(){
		var hbeli = 1000000*RandomAngkaAtoB(4,6);
		var persen = [10,15,20,25,30]
		persen = RandomMyArray(persen);
		var hjual = Math.round(hbeli*(100+persen[0])/100);
		return [hbeli,persen,hjual];
	}
	function Myaritmatika11(){
		var awal = 1000000*RandomAngkaAtoB(3,7);
		var persen = [1,2,3,4,5,6,7,8,9,10]
		persen = RandomMyArray(persen);
		var bulan = 3*RandomAngkaAtoB(10,30);
		var hasil = Math.round(bulan/12*awal*(persen[0]+100)/100);
		return [awal,persen,bulan,hasil];
	}
	function Myaritmatika12(){
		var awal = 100000*RandomAngkaAtoB(40,8);
		var persen = [1,2,3,4,5,6,7,8,9,10]
		persen = RandomMyArray(persen);
		var hasil = Math.round(awal*(100-persen[0])/100);
		return [awal,persen,hasil];
	}
	function Myaritmatika13(){
		var awal = 1000000*RandomAngkaAtoB(3,7);
		var persen = [1,2,3,4,5,6,7,8,9,10]
		persen = RandomMyArray(persen);
		var bulan = 3*RandomAngkaAtoB(10,30);
		var hasil = Math.round(bulan/12*awal*(persen[0]+100)/100);
		return [awal,persen,bulan,hasil];
	}
	function Myaritmatika14(){
		var awal = 1000000*RandomAngkaAtoB(3,7);
		var persen = [1,2,3,4,5,6,7,8,9,10]
		persen = RandomMyArray(persen);
		var bulan = 3*RandomAngkaAtoB(10,30);
		var hasil = Math.round(bulan/12*awal*(persen[0]+100)/100);
		return [awal,persen,bulan,hasil];
	}
	function Myaritmatika15(){
		var awal = 1000000*RandomAngkaAtoB(3,7);
		var persen = [1,2,3,4,5,6,7,8,9,10]
		persen = RandomMyArray(persen);
		var bulan = 3*RandomAngkaAtoB(10,30);
		var hasil = Math.round(bulan/12*awal*(persen[0]+100)/100);
		return [awal,persen,bulan,hasil];
	}
	function Myaritmatika16(){
		var awal = 1000000*RandomAngkaAtoB(3,7);
		var persen = [1,2,3,4,5,6,7,8,9,10]
		persen = RandomMyArray(persen);
		var bulan = 3*RandomAngkaAtoB(10,30);
		var hasil = Math.round(bulan/12*awal*(persen[0]+100)/100);
		return [awal,persen,bulan,hasil];
	}
	function Myaritmatika17(){
		var modal = 10000*RandomAngkaAtoB(3,7);
		var atot = 10;
		var a1 = 7;//RandomAngkaAtoB(3,4);
		var a2 = 2
		var a3 = atot - a1 - a2;
		var ArrPersen = [10,15,20,25,30];
		ArrPersen = RandomMyArray(ArrPersen);
		var hargaA1 = Math.round(modal*(100+ArrPersen[0])/100);
		var hargaA2 = Math.round(modal*(100+ArrPersen[1])/100);
		var hargaA3 = 0;
		
		var persen = ((hargaA1*a1+hargaA2*a2-modal*atot)*100/(modal*atot))
		return [modal,atot,a1,a2,hargaA1,hargaA2,persen];
	}
	function Myaritmatika18(){
		var pinjaman = 3000000*RandomAngkaAtoB(0,4);
		var ArrPersen = [1, 1.5, 2, 2.5, 3, 3.5];
		ArrPersen = RandomMyArray(ArrPersen);
		var bulan = 12;
		var perbulan = Math.round((100+ArrPersen[0])/100*pinjaman/bulan);
		return [pinjaman,ArrPersen[0],bulan,perbulan];
	}
	function Myaritmatika19(){
		var juml1 = 2;
		var juml2 = 1;
		var jumltot = juml1+juml2;
		var AR2Persen = [[8,20],[11,20],[14,20],[17,20],[23,20],
						[20,8],[20,14],[20,26],[20,32],[20,38],
						[25,10],[25,13],[25,16],[25,19],[25,22],
						[30,12],[30,15],[30,18],[30,21],[30,24],[30,27]];
		AR2Persen = RandomMyArray(AR2Persen);
		var hargaAwal = 1000000*RandomAngkaAtoB(1,8);
		var hargaTot = jumltot*12*hargaAwal
		var harga1 = Math.round(hargaTot/(juml1*12)*(100+AR2Persen[0][0])/100);
		var harga2 = Math.round(hargaTot/(juml2*12)*(100+AR2Persen[0][1])/100);
		var persen = (2*AR2Persen[0][0]+1*AR2Persen[0][1])/3;
		
		return [hargaTot,harga1,harga2,persen];
	}
	function Myaritmatika20(){
		var arPersen = [[20,25,50,30,15,5],[20,25,40,30,20,10],[20,25,45,35,15,5],[20,25,55,30,10,5],[20,25,40,30,25,5],
						[25,25,50,30,15,5],[25,25,40,30,20,10],[25,25,45,35,15,5],[25,25,55,30,10,5],[25,25,40,30,25,5],
						[40,30,50,30,15,5],[40,30,40,30,20,10],[40,30,45,35,15,5],[40,30,55,30,10,5],[40,30,40,30,25,5]]
		var no = -1+RandomAngkaAtoB(0,15);
		var mpern = (100-arPersen[no][1])/(100+arPersen[no][0]);
		var arLabel = [];
		var totharga = 1000000;
		for(var i=0;i<4;i++){
			arLabel[i] = arPersen[no][i+2]*totharga/100;
		}
		var ct = 20;//1 kodi;
		var tothargabeli = totharga*ct*mpern;
		
		return [arPersen[no][0],arPersen[no][1],arLabel,tothargabeli,totharga,ct,mpern];
	}
	function Myaritmatika21(){
		var satBerat = [16**4,25**4];//,20**4];
		var ArrPersen = [25,20];//,15];
		var ct = -1+RandomAngkaAtoB(0,2);
		var berat = satBerat[ct]*RandomAngkaAtoB(0,10);
		var Pct1 = (100+ArrPersen[ct])/100;
		var Pct2 = (100-ArrPersen[ct])/100;
		var benar = (100+ArrPersen[ct])**4 * (100-ArrPersen[ct])**3 * berat/100**7;
		//console.log(ct+" "+benar);
		var salah1 = Math.round(Pct1**4 * Pct2**4 * berat);
		var salah2 = Math.round(ArrPersen[ct]**4 * berat/100**4);
		var salah3 = Math.round((100+ArrPersen[ct])**4 * berat/100**4);
		var salah4 = Math.round(Pct1**3 * Pct2**2 * berat);
		var salah5 = Math.round(Pct1**4 * berat);
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [berat,ArrPersen[ct],benar,ArrSalah];
	}
	function Myaritmatika22(){
		var HargaJual = 100000*RandomAngkaAtoB(10,20);
		var persen = 5*RandomAngkaAtoB(2,4);
		var ArPersen = [5,10,15,20,25,30];
		ArPersen = RandomMyArray(ArPersen);
		var benar = Math.round((100-ArPersen[0])*HargaJual/100);
		//console.log(ct+" "+benar);
		var salah1 = Math.round((100-ArPersen[1])*HargaJual/100);
		var salah2 = Math.round((100-ArPersen[2])*HargaJual/100);
		var salah3 = Math.round((100-ArPersen[3])*HargaJual/100);
		var salah4 = Math.round((100-ArPersen[4])*HargaJual/100);
		var salah5 = Math.round((100-ArPersen[5])*HargaJual/100);
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [HargaJual,persen,benar,ArrSalah];
	}
	function Myaritmatika23(){
		var Awal = 100000*RandomAngkaAtoB(0,20);
		var persen = RandomAngkaAtoB(5,20);
		var bulan = 3*RandomAngkaAtoB(4,12);
		var Akhir = Math.round((100+persen)*Awal/100*bulan/12);
		var salah1 = bulan+5;
		var salah2 = bulan+10;
		var salah3 = bulan+15;
		var salah4 = bulan-5;
		var salah5 = bulan-10;
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [Awal,persen,Akhir,bulan,ArrSalah];
	}
	function Myaritmatika24(){
		var modal = 10000*RandomAngkaAtoB(5,20);
		var arrPersen = [3,6,9,12,15,18,21,24,27,30];
		arrPersen = RandomMyArray(arrPersen);
		var persenrugi = arrPersen[0];
		var hasil = (1*modal-persenrugi*modal/100);
		return [modal,persenrugi,hasil];
	}
	function HargaProperti24(nmcanvas){
		const canvas = document.getElementById(nmcanvas);
		const ctx = canvas.getContext("2d");
		do{
			var Persen1 = [25,20,15,10];
			var Persen2 = [25,20,15,10];
			Persen1 = RandomMyArray(Persen1);
			Persen2 = RandomMyArray(Persen2);
			var harga=[0,0,0,0];
			var hasil=[0,0,0,0];
			var persenbulat=[0,0,0,0];
			var teks2 = ["","","",""]
			var teks3 = ["","","",""]
			for(var i=0;i<4;i++){
				harga[i] = 100000+10000*RandomAngkaAtoB(2,4);
				persenbulat[i] = harga[i]*Persen2[i]/100;
				hasil[i] = harga[i]-persenbulat[i];
				var ct = RandomAngkaAtoB(0,2);
				if(ct==1){
					teks2[i]="Discount";
					teks3[i]=Persen2[i]+"%";
				}else{
					teks2[i]="Cashback";
					teks3[i]="IDR "+StringRibuan(persenbulat[i])+".00";
				}
			}
			var ff1 = hasil[0]==hasil[1] || hasil[0]==hasil[2] || hasil[0]==hasil[3];
			var ff2 = hasil[1]==hasil[2] || hasil[1]==hasil[3];
			var ff3 = hasil[2]==hasil[3];
			var ff = ff1 || ff2 || ff3;
		}while(ff)
		var termurah = 0;
		var awal = hasil[0];
		for(var i=1;i<4;i++){
			if(hasil[i]<awal){
				awal = hasil[i];
				termurah = i;
			}
		}
		// menambahkan image pada canvas //
		var dy = 0;
		let base0_image = new Image();
		//base0_image.src = "data:image/png;base64,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";
		base0_image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAACACAIAAABcNS0sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkJDRDZDNjI1RjcxMUYxOEYwM0ZDN0Q5MTM4MTI4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkJDRDZDNzI1RjcxMUYxOEYwM0ZDN0Q5MTM4MTI4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyQkNENkM0MjVGNzExRjE4RjAzRkM3RDkxMzgxMjg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQkNENkM1MjVGNzExRjE4RjAzRkM3RDkxMzgxMjg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uqtWsAAADrpJREFUeNrs3H9UVOed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";
		base0_image.onload = function () {
			ctx.drawImage(base0_image, 0, 0+dy,base0_image.width, base0_image.height);
			ctx.font = "16px Times New Roman";
			ctx.textAlign = "center";
			for(var i=0;i<4;i++){
				ctx.fillText("Price",58+120*i,50+dy);
				ctx.fillText("Rp"+StringRibuan(harga[i])+".00",58+120*i,70+dy);
				ctx.fillText(teks2[i],58+120*i,100+dy);
				ctx.fillText(teks3[i],58+120*i,120+dy);
			}
		}
		return termurah;
	}
	function Myaritmatika25(){
		var MasukBenar = 100000*RandomAngkaAtoB(0,20);
		var KeluarBenar = MasukBenar+10000*RandomAngkaAtoB(0,3);
		var MasukSalah1 = MasukBenar;
		var KeluarSalah1 = MasukSalah1-10000*RandomAngkaAtoB(0,3);
		var MasukSalah2 = 100000*RandomAngkaAtoB(0,20);
		var KeluarSalah2 = MasukSalah2-10000*RandomAngkaAtoB(0,3);
		var MasukSalah3 = 100000*RandomAngkaAtoB(0,20);
		var KeluarSalah3 = MasukSalah3;
		
		return [MasukBenar,KeluarBenar,MasukSalah1,KeluarSalah1,MasukSalah2,KeluarSalah2,MasukSalah3,KeluarSalah3];
	}
	function Myaritmatika26(){
		var Harga = 100000*RandomAngkaAtoB(0,20);
		var HargaSatuan = 1000*RandomAngkaAtoB(0,20);
		var LoyangMin = Math.ceil(Harga/HargaSatuan);
		var Modal = HargaSatuan*LoyangMin;
		var Loyang = LoyangMin+RandomAngkaAtoB(4,10);
		var Untung = Loyang*HargaSatuan - Modal;
		var salah1 = (Loyang+1)*HargaSatuan - Modal;
		var salah2 = (Loyang+2)*HargaSatuan - Modal;
		var salah3 = (Loyang+3)*HargaSatuan - Modal;
		var salah4 = (Loyang-1)*HargaSatuan - Modal;
		var salah5 = (Loyang-2)*HargaSatuan - Modal;
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [Harga,HargaSatuan,Modal,Loyang,Untung,ArrSalah];
	}
	function Myaritmatika27(){
		var HBeli1kg = 1000*RandomAngkaAtoB(12,8);
		var Nkg = RandomAngkaAtoB(5,10);
		var HBeli = Nkg*HBeli1kg;
		var ArrPersen = [10,15,20,25,30,35];
		ArrPersen = RandomMyArray(ArrPersen);
		var HJual1kg = Math.round(HBeli1kg*(100+ArrPersen[0])/100);
		var salah1 = Math.round(HBeli1kg*(100+ArrPersen[1])/100);
		var salah2 = Math.round(HBeli1kg*(100+ArrPersen[2])/100);
		var salah3 = Math.round(HBeli1kg*(100+ArrPersen[3])/100);
		var salah4 = Math.round(HBeli1kg*(100+ArrPersen[4])/100);
		var salah5 = Math.round(HBeli1kg*(100+ArrPersen[5])/100);
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [HBeli1kg,Nkg,HBeli,ArrPersen[0],HJual1kg,ArrSalah];
	}
	function Myaritmatika28(){
		var Awal = 3000000*RandomAngkaAtoB(0,9);
		var Bulan = RandomAngkaAtoB(3,8);
		var ArrPersen = [10,15,20,25,30,35];
		ArrPersen = RandomMyArray(ArrPersen);
		var Bunga = Math.round((Awal*ArrPersen[0]*Bulan/12)/100);
		var salah1 = Math.round((Awal*ArrPersen[1]*Bulan/12)/100);
		var salah2 = Math.round((Awal*ArrPersen[2]*Bulan/12)/100);
		var salah3 = Math.round((Awal*ArrPersen[3]*Bulan/12)/100);
		var salah4 = Math.round((Awal*ArrPersen[4]*Bulan/12)/100);
		var salah5 = Math.round((Awal*ArrPersen[5]*Bulan/12)/100);
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [Awal,Bulan,ArrPersen[0],Bunga,ArrSalah];
	}
	function Myaritmatika29(){
		var Beli = 3000000*RandomAngkaAtoB(0,9);
		var ArrPersen = [10,15,20,25,30,35];
		ArrPersen = RandomMyArray(ArrPersen);
		var Persen = ArrPersen[0]+100;
		var Untung = Math.round((Beli*ArrPersen[0])/100);
		var salah1 = Math.round((Beli*ArrPersen[1])/100);
		var salah2 = Math.round((Beli*ArrPersen[2])/100);
		var salah3 = Math.round((Beli*ArrPersen[3])/100);
		var salah4 = Math.round((Beli*ArrPersen[4])/100);
		var salah5 = Math.round((Beli*ArrPersen[5])/100);
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [Beli,Persen,Untung,ArrSalah];
	}
	function Myaritmatika30(){
		var Bruto = 5*RandomAngkaAtoB(1,4);
		var ArrPersen = [0.4,0.5,0.6,0.7,0.8,0.9];
		ArrPersen = RandomMyArray(ArrPersen);
		var Tara = ((Bruto*ArrPersen[0])/100);
		var Neto = ((Bruto*(100-ArrPersen[0]))/100);
		var salah1 = Tara;
		var salah2 = ((Bruto*(100-ArrPersen[1]))/100);
		var salah3 = ((Bruto*(100-ArrPersen[2]))/100);
		var salah4 = ((Bruto*(100-ArrPersen[3]))/100);
		var salah5 = ((Bruto*(ArrPersen[1]))/100);
		var ArrSalah = [salah1,salah2,salah3,salah4,salah5];
		ArrSalah = RandomMyArray(ArrSalah);
		
		return [Bruto,ArrPersen[0],Neto,ArrSalah];
	}
	function GetSoal1(){
		const aritmatika = MyAritmatika1();
		//[modal,persen,bln,hasil];
		var modal=aritmatika[0];
		var persen=aritmatika[1];
		var bln=aritmatika[2];
		var hasil=aritmatika[3];
		
		//1. 
		//Toni menabung di bank dengan besar tabungan besar tabungan awal IDR1.200.000.00, 
		//suku bunga tabungan 9% per tahun. Ketika ia mengambil seluruh uang tabungannya, 
		//jumlah tabungan Toni menjadi sebesar IDR1.281.000.00. Lama Toni menabung adalah...
		//6 bulan
		//8 bulan
		//9 bulan
		//10 bulan

		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" saves in a bank with an initial savings amount of IDR"+StringRibuan(modal)+".00, ";
		ss += "savings interest rate "+persen+"% per year. When he withdraws all his savings, ";
		ss += "Toni's savings amount becomes IDR"+StringRibuan(hasil)+".00. The duration of "+ tokoh[0]+" saving is ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = bln;
		var pilSalah = [bln-2,bln-1,bln+1,bln+2,bln+3,bln+4];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" months<br>B. "+Ar[1]+" months<br>C. "+Ar[2]+" months<br>D. "+Ar[3]+" months</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	
	function GetSoal2(){
		const aritmatika = MyAritmatika2();
		//[modal,persen,bln,hasil];
		var modal=aritmatika[0];
		var persen=aritmatika[1];
		var bln=aritmatika[2];
		var hasil=aritmatika[3];
		
		//2. Yugo menabung di sebuah bank sebesar IDR200.000.00. 
		//Setelah sembilan bulan tabungan Yugo menjadi IDR218.000.00. 
		//Besar suku bunga yang ditetapkan bank pertahun adalah...

		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" saves IDR"+StringRibuan(modal)+".00. ";
		ss += "After "+NamaTeksBulan(bln)+" month, the savings of "+tokoh[0]+" become IDR"+StringRibuan(hasil)+".00. ";
		ss += "The interest rate set by the bank per year is...";
		
		var Ar = [];
		// jawaban
		Ar[0] = persen;
		var pilSalah = [persen-1,persen-2,persen-3,persen-4,persen-5,persen+1,persen+2,persen+3,persen+4,persen+5,persen-10,persen+10];
		
		do{
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<=0 || Ar[2]<=0 || Ar[3]<=0
		}while(ff)
			
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" %<br>B. "+Ar[1]+" %<br>C. "+Ar[2]+" %<br>D. "+Ar[3]+" %</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal3(){
		const aritmatika = MyAritmatika3();
		//[modal,persen,bln,hasil];
		var modal=aritmatika[0];
		var persen=aritmatika[1];
		var bln=aritmatika[2];
		var hasil=aritmatika[3];
		
		//Revi menabung di sebuah bank sebesar IDR2.000.000.00. 
		//Setelah 5 bulan uang Revi menjadi IDR2.165.000.00. 
		//Besar suku bunga bank pertahun adalah...

		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" saves IDR"+StringRibuan(modal)+".00. ";
		ss += "After "+bln+" months, "+ tokoh[0]+"'s savings become IDR"+StringRibuan(hasil)+".00. ";
		ss += "The annual bank interest rate is...";
		
		
		var Ar = [];
		// jawaban
		Ar[0] = persen;
		do{
			var pilSalah = [persen-1,persen-2,persen-3,persen-4,persen-5,persen+1,persen+2,persen+3,persen+4,persen+5,persen-10,persen+10];
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<=0 || Ar[2]<=0 || Ar[3]<=0;
		}while(ff);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" %<br>B. "+Ar[1]+" %<br>C. "+Ar[2]+" %<br>D. "+Ar[3]+" %</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal4(){
		const aritmatika = MyAritmatika4();
		//[modal,persen,bln,hasil];
		var modal=aritmatika[0];
		var persenrugi=aritmatika[1];
		var hasil=aritmatika[2];
		
		//Apif membeli sepatu dengan harga IDR329.000.00,
		//kemudian sepatu itu dijual kepada saudaranya dan mengalami kerugian 2%. 
		//Harga penjualan sepatu adalah...

		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" bought shoes for IDR"+StringRibuan(modal)+".00. ";
		ss += "then the shoes were sold to his brother and suffered a loss of "+persenrugi+"%. ";
		ss += "The selling price of the shoes is... ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = hasil;
		do{
			var pilSalah = [(1*modal-(persenrugi-1)*modal/100),
							(1*modal-(persenrugi-5)*modal/100),
							(1*modal-(persenrugi+1)*modal/100),
							(1*modal-(persenrugi+5)*modal/100),
							(1*modal-(persenrugi-10)*modal/100),
							(1*modal-(persenrugi+10)*modal/100)];
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<=0 || Ar[2]<=0 || Ar[3]<=0;
		}while(ff);
						
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR "+Ar[0]+".00<br>B. IDR "+Ar[1]+".00<br>C. IDR "+Ar[2]+".00<br>D. IDR "+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
	
		return ArFix;
	}
	function GetSoal5(canv){
		const aritmatika = Myaritmatika5();
		//[modal,persen,bln,hasil];
		var modal=aritmatika[0];
		var persenrugi=aritmatika[1];
		var hasil=aritmatika[2];
		
		const termurah = HargaProperti5(canv);
		var Toko1 = ["Rame Store","Damai Store","Senang Store","Indah Store"];
		var Toko2 = [];
		
		//Ali akan membeli sebuah baju dan celana di toko yang sama. 
		//Di toko manakah Ali berbelanja agar diperoleh harga yang paling murah.
		
		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" will buy a shirt and pants at the same store. ";
		ss += "Which store should "+tokoh[0]+" shop at to get the cheapest price? ";
		
		var Ar = [];
		// jawaban
		

		Ar[0] = Toko1[termurah];
		var pilSalah = [];
		for(var i=0;i<4;i++){
			if(i !== termurah){
				pilSalah.push(Toko1[i]);
			}
		}
		
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
		
		return ArFix;
	}
	function GetSoal6(){
		const aritmatika = Myaritmatika6();
		//[hb,hj1,hj2,n1,n2,ntot,pctbiaya,pctuntung];;
		var hbeli=aritmatika[0];
		var hjual1=aritmatika[1];
		var hjual2=aritmatika[2];
		var n1=aritmatika[3];
		var n2=aritmatika[4];
		var ntot=aritmatika[5];
		var pctbiaya=aritmatika[6];
		var pctuntung=aritmatika[7];
		
		// 300*hj1 + 200*hj2 = hb1*500*102/100*120/100
		
		//Pak Balugu memesan buah apel dari grosir untuk dijual kembali sebanyak 500 buah dengan harga 5.000.00, 
		//dan dikenakan biaya pengiriman sebesar 2% dari total harga pembelian. 
		//Kemudian ia menjual 300 apel dengan harga 5.700. 
		//Agar ia mendapatkan keuntungan sebesar 20% dari total biaya pembelian apel, 
		//maka pak Balugu harus menjual sisa apel yang belum terjual dengan harga...
		
		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" orders apples from a wholesaler to resell in the amount of "+ntot+" at a price of IDR"+StringRibuan(hbeli)+".00, "; 
		ss += "and is charged a shipping fee of "+pctbiaya+"% of the total purchase price. "; 
		ss += "Then he sells "+n1+" apples at a price of IDR"+StringRibuan(hjual1)+".00, "; 
		ss += "In order for him to make a profit of "+pctuntung+"% of the total cost of purchasing apples, ";
		ss += "then "+ tokoh[0]+" must sell the remaining unsold apples at a price of ..."
		
		var Ar = [];
		// jawaban
		Ar[0] = hjual2;
		var pilSalah = [hjual2-400,hjual2-300,hjual2-200,hjual2-100,hjual2+100,hjual2+200,hjual2+300,hjual2+400];
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A.  IDR"+Ar[0]+".00<br>B.  IDR"+Ar[1]+".00<br>C.  IDR"+Ar[2]+".00<br>D.  IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal7(){
		const aritmatika = Myaritmatika7();
		//[a1,pc1,pc2,benar,salah1,salah2,salah3];
		//var pc1=aritmatika[0];
		var pc1=aritmatika[1];
		var pc2=aritmatika[2];
		var benar=aritmatika[3];
		var salah1=aritmatika[4];
		var salah2=aritmatika[5];
		var salah3=aritmatika[6];
		
		
		var teksbenar = "Experienced a reduction of "+Math.abs(benar)+"% from the initial value.";
		
		//Misalkan y merupakan bilangan positif. 
		//Bila y ditambahkan sebanyak 30% dari nilai awalnya. 
		//Kemudian dikurangi 40% dari nilai setelah penambahan maka y = ...
		
		var ss
		ss = "Suppose y is a positive number. "; 
		ss += "If y is added by "+pc1+"% of its initial value. "; 
		ss += "Then subtract "+pc2+"% from the value after addition, then y = ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = teksbenar;
		do{
			var pilSalah = 	["Decreased by "+Math.abs(salah1)+"% from the initial value.",
							"Increased by "+Math.abs(salah1)+"% from the initial value.",
							"Decreased by "+Math.abs(salah2)+"% from the initial value.",
							"Increased by "+Math.abs(salah2)+"% from the initial value.",
							"Decreased by "+Math.abs(salah3)+"% from the initial value.",
							"Increased by "+Math.abs(salah3)+"% from the initial value.",
							"Increased by "+Math.abs(benar)+"% from the initial value."]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[0]==Ar[1] || Ar[0]==Ar[2] || Ar[0]==Ar[3];
		}while(ff);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal8(){
		const aritmatika = Myaritmatika8();
		//[bruto,neto,tara];
		var bruto=aritmatika[0];
		var neto=aritmatika[1];
		var tara=aritmatika[2];
		
		//Pemilik sebuah toko mendapat kiriman 100 karung beras Bulog, 
		//yang masing-masing pada karungnya tertera tulisan bruto 114 kg, tara 2 kg. 
		//Neto kiriman yang diterima pemilik toko adalah...
		//200 kuintal
		//116 kuintal
		//114 kuintal
		//112 kuintal
		
		var ss
		ss = "The owner of a shop received a shipment of 100 sacks of Bulog rice, "; 
		ss += "each sack has the words gross "+bruto+" kg, tare "+tara+" kg. "; 
		ss += "The net shipment received by the shop owner is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = neto;
		do{
			var pilSalah = [bruto+neto,bruto+tara,neto-tara,bruto]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[0]==Ar[1] || Ar[0]==Ar[2] || Ar[0]==Ar[3];
		}while(ff);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" quintal<br>B. "+Ar[1]+" quintal<br>C. "+Ar[2]+" quintal<br>D. "+Ar[3]+" quintal</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal9(){
		const aritmatika = Myaritmatika9();
		//[harga,neto,untung,harga,hargajual];
		var harga1=aritmatika[0];
		var neto=aritmatika[1];
		var pctuntung=aritmatika[2];
		var harga=aritmatika[3];
		var hargajual=aritmatika[4];
		
		//Pedagang membeli 150 kg beras dengan harga IDR750.000.00, 
		//jika pedagang menginginkan untung 15%, 
		//harga penjualan tiap kg adalah...
		//6.000.00	
		//5.750.00
		//5.500.00
		//4.500.00

		var ss
		ss = "The trader bought "+neto+" kg of rice with a total price of IDR"+StringRibuan(harga)+".00, "; 
		ss += "if the trader wants a profit of "+pctuntung+"%, "; 
		ss += "the selling price per kg is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = hargajual;
		do{
			var pilSalah = [Math.round(harga/neto),
							Math.round(harga/neto)+100,
							Math.round(harga/neto)-100,
							Math.round(harga/neto)+200,
							Math.round(harga/neto)-200,
							Math.round(harga/neto)+300,
							Math.round(harga/neto)-300,
							Math.round(harga/neto)+400,
							Math.round(harga/neto)-400,
							Math.round(harga/neto)+500,
							Math.round(harga/neto)-500,
							hargajual+100,
							hargajual-100,
							hargajual+200,
							hargajual-200,
							hargajual+300,
							hargajual-300,
							hargajual+400,
							hargajual-400,
							hargajual+500,
							hargajual-500]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal10(){
		const aritmatika = Myaritmatika10();
		//[hbeli,persen,hjual];
		var hbeli=aritmatika[0];
		var persen=aritmatika[1];
		var hjual=aritmatika[2];
		
		//Toko elektronik "CINTA PRODUK INDONESIA" menjual televisi dan memperoleh keuntungan 25%. 
		//Jika harga beli televisi tersebut IDR3.600.000.00 maka harga jualnya adalah...
		//3.800.000.00
		//4.000.000.00
		//4.250.000.00
		//4.500.000.00

		var toko = NamaToko();
		var ss
		ss = "Shop "+toko[0]+" sells televisions and earns a profit of "+persen[0]+"%. "; 
		ss += "If the purchase price of the television is IDR"+StringRibuan(hbeli)+".00, then the selling price is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = hjual;
		do{
			var pilSalah = [Math.round(hbeli*(100+persen[1])/100),
							Math.round(hbeli*(100+persen[2])/100),
							Math.round(hbeli*(100+persen[3])/100),
							Math.round(hbeli*(100+persen[4])/100)]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal11(){
		const aritmatika = Myaritmatika11();
		//[awal,persen,bulan,hasil];
		var awal=aritmatika[0];
		var persen=aritmatika[1];
		var bulan=aritmatika[2];
		var hasil=aritmatika[3];
		
		//Diana menabung di bank sebesar IDR8.000.000.00. 
		//Setelah 88 bulan uangnya diambil seluruhnya sebesar IDR8.800.000.00. 
		//Berapakah persentasi suku bunga tabungan yang diberikan bank tersebut?
		
		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" saved in the bank IDR"+StringRibuan(awal)+".00 "; 
		ss += "After "+bulan+" months, the money was withdrawn in full, amounting to IDR"+StringRibuan(hasil)+".00. "; 
		ss += "What is the percentage of savings interest rate given by the bank?";
		
		
		var Ar = [];
		// jawaban
		Ar[0] = persen[0];
		do{
			var pilSalah = [persen[1],
							persen[2],
							persen[3],
							persen[4],
							persen[5]]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"%<br>B. "+Ar[1]+"%<br>C. "+Ar[2]+"%<br>D. "+Ar[3]+"%</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal12(){
		const aritmatika = Myaritmatika12();
		//[awal,persen,bulan,hasil];
		var awal=aritmatika[0];
		var persen=aritmatika[1];
		var hasil=aritmatika[2];
		
		//Pak Nur menjual telepon genggam seharga IDR2.250.000.00 
		//dan mengalami kerugian sebesar 10%. 
		//Harga beli telepon genggam tersebut adalah...
		
		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" sold a cell phone for IDR"+StringRibuan(hasil)+".00 "; 
		ss += "and suffered a loss of "+persen[0]+"%. "; 
		ss += "The purchase price of the cell phone is...";
		
		var Ar = [];
		// jawaban
		Ar[0] = awal;
		var awalsalah=Math.round(hasil*(100+persen[0])/100)
		do{
			var pilSalah = [awal+100000,
							awal+200000,
							awal+300000,
							awal-100000,
							awal-200000,
							awal-300000,
							awalsalah,
							awalsalah+100000,
							awalsalah-100000,
							awalsalah+200000,
							awalsalah-200000]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal14(){
		const aritmatika = Myaritmatika14();
		//[awal,persen,bulan,hasil];
		var awal=aritmatika[0];
		var persen=aritmatika[1];
		var bulan=aritmatika[2];
		var hasil=aritmatika[3];
		
		//Kakak menabung di bank sebesar IDR800.000.00 dengan suku bunga 9% setahun. 
		//Tabungan kakak saat diambil sebesar IDR920.000.00. 
		//Lama kakak menabung adalah ...
		
		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" saves IDR"+StringRibuan(awal)+".00 in the bank with an interest rate of "+persen[0]+"% per year. "; 
		ss += "The savings of "+ tokoh[0]+" when withdrawn are IDR"+StringRibuan(hasil)+".00. The duration of "+ tokoh[0]+" saving is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = bulan;
		do{
			var pilSalah = [bulan+1,
							bulan+2,
							bulan+3,
							bulan+4,
							bulan+5,
							bulan-1,
							bulan-2,
							bulan-3,
							bulan-4,
							bulan-5]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" months<br>B. "+Ar[1]+" months<br>C. "+Ar[2]+" months<br>D. "+Ar[3]+" months</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal13(){
		const aritmatika = Myaritmatika13();
		//[awal,persen,bulan,hasil];
		var awal=aritmatika[0];
		var persen=aritmatika[1];
		var bulan=aritmatika[2];
		var hasil=aritmatika[3];
		
		//Andi menabung di bank sebesar IDR250.000.00 dengan suku bunga 18% pertahun. 
		//Jika tabungan Andi sekarang IDR280.000.00, lama Andi menabung adalah...
		
		var tokoh = NamaTokoh();
		var ss
		ss = tokoh[0]+" saves IDR"+StringRibuan(awal)+".00 in the bank with an interest rate of "+persen[0]+"% per year. "; 
		ss += "If Andi's savings are now IDR"+StringRibuan(hasil)+".00, the duration of "+tokoh[0]+" saving is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = bulan;
		do{
			var pilSalah = [bulan+1,
							bulan+2,
							bulan+3,
							bulan+4,
							bulan+5,
							bulan-1,
							bulan-2,
							bulan-3,
							bulan-4,
							bulan-5]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" months<br>B. "+Ar[1]+" months<br>C. "+Ar[2]+" months<br>D. "+Ar[3]+" months</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal15(){
		const aritmatika = Myaritmatika15();
		//[awal,persen,bulan,hasil];
		var awal=aritmatika[0];
		var persen=aritmatika[1];
		var bulan=aritmatika[2];
		var hasil=aritmatika[3];
		
		//Tabungan kakak saat diambil sebesar IDR920.000.00. 
		//Awalnya kakak menabung di bank sebesar IDR800.000.00. 
		//Suku bunga di bank tersebut adalah 9% setahun. 
		//Lama kakak menabung adalah ...
		
		var tokoh = NamaTokoh();
		var ss
		ss = "The savings of "+tokoh[0]+" when withdrawn is IDR"+StringRibuan(hasil)+".00. ";
		ss += "Initially, "+tokoh[0]+" saved IDR"+StringRibuan(awal)+".00 in the bank. ";
		ss += "The interest rate at the bank is "+persen[0]+"% per year. ";
		ss += "The duration of "+tokoh[0]+" saving is...";
		
		var Ar = [];
		// jawaban
		Ar[0] = bulan;
		do{
			var pilSalah = [bulan+1,
							bulan+2,
							bulan+3,
							bulan+4,
							bulan+5,
							bulan-1,
							bulan-2,
							bulan-3,
							bulan-4,
							bulan-5]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" months<br>B. "+Ar[1]+" months<br>C. "+Ar[2]+" months<br>D. "+Ar[3]+" months</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal16(){
		const aritmatika = Myaritmatika16();
		//[awal,persen,bulan,hasil];
		var awal=aritmatika[0];
		var persen=aritmatika[1];
		var bulan=aritmatika[2];
		var hasil=aritmatika[3];
		
		//Setelah 9 bulan uang tabungan Susi di koperasi berjumlah IDR3.815.000.00. 
		//Koperasi memberi jasa simpanan berupa bunga 12% pertahun.  
		//Tabungan awal Susi di koperasi adalah ...
		
		var tokoh = NamaTokoh();
		var ss
		ss = "After "+bulan+" months, the savings of "+tokoh[0]+" in the cooperative amounted to IDR"+StringRibuan(hasil)+".00. ";
		ss += "The cooperative provides savings services in the form of interest of "+persen[0]+"% per year. ";
		ss += "The initial savings of "+tokoh[0]+" in the cooperative are...";
		
		var Ar = [];
		// jawaban
		Ar[0] = awal;
		do{
			var pilSalah = [Math.round((bulan)/12*awal*(persen[0])/100),
							Math.round((bulan+3)/12*awal*(persen[0]+100)/100),
							Math.round((bulan+3)/12*awal*(persen[0])/100),
							Math.round((bulan-3)/12*awal*(persen[0]+100)/100),
							Math.round((bulan-3)/12*awal*(persen[0])/100),
							Math.round((bulan+6)/12*awal*(persen[0]+100)/100),
							Math.round((bulan+6)/12*awal*(persen[0])/100),
							Math.round((bulan-6)/12*awal*(persen[0]+100)/100),
							Math.round((bulan-6)/12*awal*(persen[0])/100),
							awal+1000000,
							awal-1000000,
							awal+2000000,
							awal-2000000,
							awal+3000000,
							awal-3000000]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal17(){
		const aritmatika = Myaritmatika17();
		//[modal,atot,a1,a2,hargaA1,hargaA2,persen];
		var modal=aritmatika[0];
		var atot=aritmatika[1];
		var a1=aritmatika[2];
		var a2=aritmatika[3];
		var hargaA1=aritmatika[4];
		var hargaA2=aritmatika[5];
		var persen=aritmatika[6];
		
		//Andi membeli 10 pasang sepatu seharga IDR400.000.00. 
		//Sebanyak 7 pasang sepatu dijual dengan harga IDR50.000.00 per pasang, 
		//2 pasang dijual IDR40.000.00 per pasang, 
		//dan sisanya disumbangkan. 
		//Persentase keuntungan yang diperoleh Andi adalah... 
		
		var ss
		ss = "Andi bought "+atot+" pairs of shoes for IDR"+StringRibuan(modal*atot)+".00. ";
		ss += "A total of "+a1+" pairs of shoes were sold for IDR"+StringRibuan(hargaA1)+".00 per pair, ";
		ss += ""+a2+" pairs were sold for IDR"+StringRibuan(hargaA2)+".00 per pair, ";
		ss += "and the rest was donated. ";
		ss += "Andi's profit percentage is...";
		
		
		var Ar = [];
		// jawaban
		Ar[0] = persen;
		do{
			var pilSalah = [persen-1,
							persen-2,
							persen-3,
							persen-4,
							persen-5,
							persen-6,
							persen-7,
							persen-8,
							persen-9,
							persen-10,
							persen+1,
							persen+2,
							persen+3,
							persen+4,
							persen+5,
							persen+6,
							persen+7,
							persen+8,
							persen+9,
							persen+10]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"%<br>B. "+Ar[1]+"%<br>C. "+Ar[2]+"%<br>D. "+Ar[3]+"%</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal18(){
		const aritmatika = Myaritmatika18();
		//[pinjaman,ArrPersen[0],bulan,perbulan];
		var pinjaman=aritmatika[0];
		var persen=aritmatika[1];
		var bulan=aritmatika[2];
		var perbulan=aritmatika[3];
		
		//Seseorang meminjam uang di koperasi sebesar IDR6.000.000.00 
		//dan diangsur selama 12 bulan dengan bunga 1,5% per bulan. 
		//Besar angsuran tiap bulan adalah ... 
		
		var ss
		
		ss = "A person borrowed money from a cooperative in the amount of IDR"+StringRibuan(pinjaman)+".00 ";
		ss += "and paid in installments over "+bulan+" months with interest of "+StringDesimal(persen)+"% per month. ";
		ss += "The amount of the monthly installment is...";
		
		var Ar = [];
		// jawaban
		Ar[0] = perbulan;
		do{
			var pilSalah = [Math.round((persen)/100*pinjaman/bulan),
							Math.round((persen-0.5)/100*pinjaman/bulan),
							Math.round((persen-1)/100*pinjaman/bulan),
							Math.round((persen+0.5)/100*pinjaman/bulan),
							Math.round((persen+1)/100*pinjaman/bulan),
							Math.round((100+persen+0.5)/100*pinjaman/bulan),
							Math.round((100+persen+1)/100*pinjaman/bulan),
							Math.round((100+persen-0.5)/100*pinjaman/bulan),
							Math.round((100+persen-1)/100*pinjaman/bulan)]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal19(){
		const aritmatika = Myaritmatika19();
		//[hargaAwal,harga1,harga2,persen];
		var hargaAwal=aritmatika[0];
		var harga1=aritmatika[1];
		var harga2=aritmatika[2];
		var persen=aritmatika[3];
		
		
		//Seorang pedagang membeli 3 lusin buku dengan harga IDR64.800.00. 
		//Dua lusin buku terjual dengan harga IDR2.500.00 per buah dan 
		//1 lusin buku dengan harga IDR1.750.00 per buah. 
		//Persentase keuntungan yang diperoleh pedagang itu adalah...
		
		var ss
		
		ss = "A trader bought 3 dozen motorcycles at a price of IDR" + StringRibuan(hargaAwal) + ".00. ";
		ss += "Two dozen motorcycles were sold at a price of IDR" + StringRibuan(harga1) + ".00 each and ";
		ss += "1 dozen motorcycles at a price of IDR" + StringRibuan(harga2) + ".00 each. ";
		ss += "The percentage of profit earned by the trader is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = persen;
		do{
			var pilSalah = [persen+1,
							persen+2,
							persen+3,
							persen+4,
							persen+5,
							persen-1,
							persen-2,
							persen-3,
							persen-4,
							persen-5]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"%<br>B. "+Ar[1]+"%<br>C. "+Ar[2]+"%<br>D. "+Ar[3]+"%</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal20(){
		const aritmatika = Myaritmatika20();
		//[arPersen[no][0],arPersen[no][1],arLabel,tothargabeli,totharga,ct,mpern];
		var persenjual=aritmatika[0];
		var persendiskon=aritmatika[1];
		var hargaLabel=aritmatika[2];
		var tothargabeli=aritmatika[3];
		var totharga=aritmatika[4];
		var ct=aritmatika[5];
		var mpern=aritmatika[6];
		
		//Sebuah toko memberi diskon sebesar 25% untuk semua jenis barang yang dijualnya. 
		//Toko tersebut telah mendapat untung 20% jika dagangannya laku terjual. 
		//Ada 4 jenis barang masing-masing tertulis harga pada label IDR500.000.00; IDR300.000.00; IDR150.000.00; dan IDR50.000.00. 
		//Apabila 4 jenis barang tersebut laku terjual masing-masing 1 kodi, 
		//maka modal yang diperlukan untuk membeli barang tersebut adalah...

		var ss
		ss = "A store offers a discount of "+persendiskon+"% on all types of goods it sells. ";
		ss += "The store has made a profit of "+persenjual+"% if its merchandise is sold. ";
		ss += "There are 4 types of goods, each priced on the label IDR"+StringRibuan(hargaLabel[0])+".00; IDR"+StringRibuan(hargaLabel[1])+".00; IDR"+StringRibuan(hargaLabel[2])+".00; and IDR"+StringRibuan(hargaLabel[3])+".00. ";
		ss += "If 1 dozen of each of the 4 types of goods are sold, ";
		ss += "then the capital required to purchase the goods is...";
		
		var Ar = [];
		// jawaban
		Ar[0] = tothargabeli;
		do{
			var pilSalah = [totharga*(12)*mpern,
							totharga*(RandomAngkaAtoB(12,12))*mpern,
							totharga*(RandomAngkaAtoB(0,11))*mpern,
							Math.round(totharga*(12)/mpern),
							Math.round(totharga*(RandomAngkaAtoB(12,12))/mpern),
							Math.round(totharga*(RandomAngkaAtoB(0,11))/mpern)
							]
			pilSalah = RandomMyArray(pilSalah);
			Ar[1] = pilSalah[0];
			Ar[2] = pilSalah[1];
			Ar[3] = pilSalah[2];
			var ff = Ar[1]<0 || Ar[2]<0 || Ar[3]<0;
		}while(ff);
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal21(){
		const aritmatika = Myaritmatika21();
		//[berat,ArrPersen[ct],benar,ArrSalah];
		var berat=aritmatika[0];
		var persen=aritmatika[1];
		var benar=aritmatika[2];
		var ArrSalah=aritmatika[3];
		
		//Berat seekor paus biru pada awal tahun adalah 655,36 kg. 
		//Selama bulan Januari, berat paus biru naik sebanyak 25%. 
		//Karena debu dan efek meteroit yang menghalangi sinar matahari sepanjang bulan Februari berat paus biru turun 25%. 
		//Kemudian, sepanjang bulan Maret sinar matahari kembali normal dan berat paus biru kembali naik 25%. 
		//Pada bulan April, karena keracunan makanan paus biru terserang sakit perut yang menyebabkan berat nya kembali turun 25%. 
		//Keadaan seperti ini berlanjut hingga bulan-bulan berikut nya. Berat paus biru pada akhir Juli adalah...

		var ss
		ss = "The weight of a blue whale at the beginning of the year is "+StringRibuan(berat)+" kg. ";
		ss += "During January, the weight of the blue whale increased by "+persen+"%. ";
		ss += "Due to dust and the effects of meteorites blocking sunlight throughout February, the weight of the blue whale decreased by "+persen+"%. ";
		ss += "Then, throughout March, sunlight returned to normal, and the weight of the blue whale increased again by "+persen+"%. ";
		ss += "In April, due to food poisoning, the blue whale developed a stomach ache, which caused its weight to decrease again by "+persen+"%. ";
		ss += "This situation continued for the following months. The weight of the blue whale at the end of July was...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" kg<br>B. "+Ar[1]+" kg<br>C. "+Ar[2]+" kg<br>D. "+Ar[3]+" kg</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal22(){
		const aritmatika = Myaritmatika22();
		//[HargaJual,persen,benar,ArrSalah];
		var HargaJual=aritmatika[0];
		var persen=aritmatika[1];
		var benar=aritmatika[2];
		var ArrSalah=aritmatika[3];
		
		//Pak Budi menjual sepeda dengan harga IDR1.200.000.00. 
		//Jika Pak Budi mengalami kerugian 20% maka harga pembelian sepeda adalah ...
		
		var tokoh = NamaTokoh();
		var ss
		
		ss = ""+tokoh[0]+" sells a bicycle for IDR"+StringRibuan(HargaJual)+".00. ";
		ss += "If "+tokoh[0]+" experiences a loss of "+persen+"% then the purchase price of the bicycle is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		//console.log(ArFix);
		
		return ArFix;
	}
	function GetSoal23(){
		const aritmatika = Myaritmatika23();
		//[Awal,persen,Akhir,bulan,ArrSalah];
		var Awal=aritmatika[0];
		var persen=aritmatika[1];
		var Akhir=aritmatika[2];
		var benar=aritmatika[3];
		var ArrSalah=aritmatika[4];
		
		//Anita menabung sebesar IDR800.000.00 pada sebuah bank dengan suku bunga tunggal 16% per tahun. 
		//Pada saat diambil tabungan Anita menjadi IDR992.000.00. 
		//Lama Anita menabung adalah ...
		
		var tokoh = NamaTokoh();
		var ss
		ss = ""+tokoh[0]+" saves IDR"+StringRibuan(Awal)+".00 in a bank with a single interest rate of "+persen+"% per year. ";
		ss += "When withdrawn, the savings of "+tokoh[0]+" become IDR"+StringRibuan(Akhir)+".00. ";
		ss += "The duration of "+tokoh[0]+" saving is ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = benar;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" months<br>B. "+Ar[1]+" months<br>C. "+Ar[2]+" months<br>D. "+Ar[3]+" months</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal24(canv){
		const aritmatika = Myaritmatika5();
		//[modal,persen,bln,hasil];
		var modal=aritmatika[0];
		var persenrugi=aritmatika[1];
		var hasil=aritmatika[2];
		
		const termurah = HargaProperti24(canv);
		var Toko1 = ["Store  A","Store  B","Store  C","Store  D"];
		var Toko2 = [];
		
		//Dari tabel di atas toko yang menjual dengan harga yang lebih murah adalah
		
		var ss
		ss = "From the table above, the shop that sells at a cheaper price is...";
		
		var Ar = [];
		// jawaban
		

		Ar[0] = Toko1[termurah];
		var pilSalah = [];
		for(var i=0;i<4;i++){
			if(i !== termurah){
				pilSalah.push(Toko1[i]);
			}
		}
		
		pilSalah = RandomMyArray(pilSalah);
		Ar[1] = pilSalah[0];
		Ar[2] = pilSalah[1];
		Ar[3] = pilSalah[2];
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal25(){
		const aritmatika = Myaritmatika25();
		//[MasukBenar,KeluarBenar,MasukSalah1,KeluarSalah1,MasukSalah2,KeluarSalah2,MasukSalah3,KeluarSalah3]
		var M1=aritmatika[0];
		var K1=aritmatika[1];
		var M2=aritmatika[2];
		var K2=aritmatika[3];
		var M3=aritmatika[4];
		var K3=aritmatika[5];
		var M4=aritmatika[6];
		var K4=aritmatika[7];
		
		//Anita menabung sebesar IDR800.000.00 pada sebuah bank dengan suku bunga tunggal 16% per tahun. 
		//Pada saat diambil tabungan Anita menjadi IDR992.000.00. 
		//Lama Anita menabung adalah ...
		
		var ss
		ss = "The following conditions indicate a loss condition: ";
		
		var Ar = [];
		// jawaban
		Ar[0] = "Income IDR"+StringRibuan(M1)+".00 and Expenses IDR"+StringRibuan(K1)+".00";
		Ar[1] = "Income IDR"+StringRibuan(M2)+".00 and Expenses IDR"+StringRibuan(K2)+".00";
		Ar[2] = "Income IDR"+StringRibuan(M3)+".00 and Expenses IDR"+StringRibuan(K3)+".00";
		Ar[3] = "Income IDR"+StringRibuan(M4)+".00 and Expenses IDR"+StringRibuan(K4)+".00";
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+"<br>B. "+Ar[1]+"<br>C. "+Ar[2]+"<br>D. "+Ar[3]+"</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal26(){
		const aritmatika = Myaritmatika26();
		//[Harga,HargaSatuan,Modal,Loyang,Untung,ArrSalah];
		var Harga=aritmatika[0];
		var HargaSatuan=aritmatika[1];
		var Modal=aritmatika[2];
		var Loyang=aritmatika[3];
		var Untung=aritmatika[4];
		var ArrSalah=aritmatika[5];
		
		//Ibu mendapat pesanan kue bolu sebanyak 30 loyang, 
		//untuk membuatnya ibu membeli bahan pokok untuk kue bolu dengan harga IDR350.000.00. 
		//Jika ibu memberi harga IDR20.000.00 setiap loyangnya, 
		//maka ibu akan memperoleh keuntungan sebanyak ...
		
		var ss
		
		ss = "Mother received an order for sponge cake for "+Loyang+" pan, ";
		ss += "to make it, mother bought the basic ingredients for sponge cake at a price of IDR"+StringRibuan(Modal)+".00. ";
		ss += "If you give a price of IDR"+StringRibuan(HargaSatuan)+".00 per pan, ";
		ss += "then you will get as much profit as ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = Untung;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2]
		
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal27(){
		
		// khusus pakai gambar
		//var nama = insert();
		//var garis = [nama[0]+nama[1],nama[1]+nama[2],nama[2]+nama[3],nama[0]+nama[3],nama[1]+nama[5]];
		//garis = RandomMyArray(garis);
		//var namaKomplit = ""+nama[0]+nama[1]+nama[2]+nama[3]+"."+nama[4]+nama[5]+nama[6]+nama[7];
		
		const aritmatika = Myaritmatika27();
		//[HBeli1kg,Nkg,HBeli,ArrPersen[0],HJual1kg,ArrSalah];
		var HBeli1kg=aritmatika[0];
		var Nkg=aritmatika[1];
		var HBeli=aritmatika[2];
		var Persen=aritmatika[3];
		var HJual1kg=aritmatika[4];
		var ArrSalah=aritmatika[5];
		
		//Seorang pedagang membeli 5 kg jeruk dengan harga IDR75.000.00 
		//dan dijual lagi dengan keuntungan 15%, 
		//maka harga jual satu kilogram jeruk tersebut adalah ...
		
		var ss
		
		ss = "A trader buys "+Nkg+" kg of oranges at a price of IDR"+StringRibuan(HBeli)+".00 ";
		ss += "and resells them with a profit of "+Persen+"%, ";
		ss += "then the selling price of one kilogram of oranges is ... ";

		var Ar = [];
		// jawaban
		Ar[0] = HJual1kg;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2]
		
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal28(){
		const aritmatika = Myaritmatika28();
		//[Awal,Bulan,ArrPersen[0],Bunga,ArrSalah];
		var Awal=aritmatika[0];
		var Bulan=aritmatika[1];
		var Persen=aritmatika[2];
		var Bunga=aritmatika[3];
		var ArrSalah=aritmatika[4];
		
		//Farid meminjam uang di bank sebesar IDR15.000.000.00 dengan bunga 16% pertahun. 
		//Maka bunga yang harus ditanggung oleh Farid selama 3 bulan adalah ...
		
		var tokoh = NamaTokoh();
		var ss
		
		ss = ""+tokoh[0]+" borrows money from the bank in the amount of IDR"+StringRibuan(Awal)+".00 with an interest of "+Persen+"% per year. ";
		ss += "Then the interest that must be borne by "+tokoh[0]+" for "+Bulan+" months is ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = Bunga;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2];
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal29(){
		const aritmatika = Myaritmatika29();
		//[Beli,Persen,Untung,ArrSalah];
		var Beli=aritmatika[0];
		var Persen=aritmatika[1];
		var Untung=aritmatika[2];
		var ArrSalah=aritmatika[3];
		
		//Pak Dedi membeli sepeda motor bekas dengan harga IDR5.000.000.00. 
		//Dalam waktu satu minggu motor tersebut dijual kembali dengan harga 110% dari harga belinya. 
		//Keuntungan Pak Dedi adalah...
		
		var tokoh = NamaTokoh();
		var ss
		
		ss = ""+tokoh[0]+" bought a used motorcycle for IDR"+StringRibuan(Beli)+".00. ";
		ss += "Within one week the motorcycle was resold for "+Persen+"% of the purchase price. ";
		ss += "The profit of "+tokoh[0]+" is ...";
		
		var Ar = [];
		// jawaban
		Ar[0] = Untung;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2]
		
		Ar[0] = StringRibuan(Ar[0]);
		Ar[1] = StringRibuan(Ar[1]);
		Ar[2] = StringRibuan(Ar[2]);
		Ar[3] = StringRibuan(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. IDR"+Ar[0]+".00<br>B. IDR"+Ar[1]+".00<br>C. IDR"+Ar[2]+".00<br>D. IDR"+Ar[3]+".00</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
	function GetSoal30(){
		const aritmatika = Myaritmatika30();
		//[Bruto,ArrPersen[0],Neto,ArrSalah];
		var Bruto=aritmatika[0];
		var Persen=aritmatika[1];
		var Neto=aritmatika[2];
		var ArrSalah=aritmatika[3];
		
		//Bruto satu karung beras adalah 50 kg, 
		//jika taranya 0,4% maka neto satu karung beras tersebut adalah...
		
		var ss
		
		ss = "The gross value of one sack of rice is "+Bruto+" kg, ";
		ss += "if the tare is "+StringDesimal(Persen)+"% then the net value of one sack of rice is ... ";
		
		var Ar = [];
		// jawaban
		Ar[0] = Neto;
		Ar[1] = ArrSalah[0];
		Ar[2] = ArrSalah[1];
		Ar[3] = ArrSalah[2]
		
		Ar[0] = StringDesimal(Ar[0]);
		Ar[1] = StringDesimal(Ar[1]);
		Ar[2] = StringDesimal(Ar[2]);
		Ar[3] = StringDesimal(Ar[3]);
		
		var jawab = Ar[0];
		Ar = RandomMyArray(Ar);
		var noBenar = NoJawabanBenar(Ar, jawab);
		
		var textSoal = ss+" <p>A. "+Ar[0]+" kg<br>B. "+Ar[1]+" kg<br>C. "+Ar[2]+" kg<br>D. "+Ar[3]+" kg</p>";
		var ArFix = [];
		ArFix.push(textSoal);
		ArFix.push(GetABCD(noBenar));
		return ArFix;
	}
			
			
	var namefunc = [GetSoal1,
					GetSoal2,
					GetSoal3,
					GetSoal4,
					GetSoal5,
					GetSoal6,
					GetSoal7,
					GetSoal8,
					GetSoal9,
					GetSoal10,
					GetSoal11,
					GetSoal12,
					GetSoal13,
					GetSoal14,
					GetSoal15,
					GetSoal16,
					GetSoal17,
					GetSoal18,
					GetSoal19,
					GetSoal20,
					GetSoal21,
					GetSoal22,
					GetSoal23,
					GetSoal24,
					GetSoal25,
					GetSoal26,
					GetSoal27,
					GetSoal28,
					GetSoal29,
					GetSoal30];
	
	var ss
	var dd1=document.getElementById(d1);
	var cc1=document.getElementById(c1);
	var dd2=document.getElementById(d2);
	var cc2=document.getElementById(c2);
	var dd3=document.getElementById(d3);
	var cc3=document.getElementById(c3);
	var dd4=document.getElementById(d4);
	const ctx1 = cc1.getContext("2d");ctx1.reset();ctx1.clearRect(0, 0, 1000, 1000);
	const ctx2 = cc2.getContext("2d");ctx2.reset();ctx2.clearRect(0, 0, 1000, 1000);
	const ctx3 = cc3.getContext("2d");ctx3.reset();ctx3.clearRect(0, 0, 1000, 1000);
	//console.log(cc1,cc2,cc3)
	dd1.innerHTML="";
	dd2.innerHTML="";
	dd3.innerHTML="";
	dd4.innerHTML="";
	cc1.width=0;cc1.height=0;
	cc2.width=0;cc2.height=0;
	cc3.width=0;cc3.height=0;
	
	dd1.removeAttribute("hidden");
	dd2.removeAttribute("hidden");
	dd3.removeAttribute("hidden");
	dd4.removeAttribute("hidden");
	cc1.removeAttribute("hidden");
	cc2.removeAttribute("hidden");
	cc3.removeAttribute("hidden");
	
	
	dd1.innerHTML="<p>Grade 7 - Chapter 6 \u{2192} Social Arithmetic </p>";
	dd1.innerHTML="<p>Chapter 6 \u{2192} Social Arithmetic </p>";
	if(no==5){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pay attention to the following table!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pay attention to the following table!</p>";
		cc1.width = 454;
		cc1.height= 124;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Answer : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else if(no==24){
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". Pay attention to the following table!</p>";
		else			dd1.innerHTML+="<p>"+nourut+". Pay attention to the following table!</p>";
		cc1.width = 480;
		cc1.height = 128;
		ss = namefunc[no-1](cc1.id);
		dd2.innerHTML="<p>"+ss[0]+"</p>";
		dd4.innerHTML+="Answer : "+ss[1];
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd3);
	}else{
		ss = namefunc[no-1]();
		if(nourut==0)	dd1.innerHTML+="<p>"+no+". "+ss[0]+"</p>";
		else			dd1.innerHTML+="<p>"+nourut+". "+ss[0]+"</p>";
		dd4.innerHTML+="Answer : "+ss[1];
		hidingElemen(cc1);
		hidingElemen(cc2);
		hidingElemen(cc3);
		hidingElemen(dd2);
		hidingElemen(dd3);
	}

	function hidingElemen(elem){
		//hiding elemen
		elem.setAttribute("hidden", "hidden");
	}
}