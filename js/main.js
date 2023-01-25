var date=new Date();
var month=date.getMonth();

switch(month){
	case 0:
		document.write("This month 31 Days");
		break;
	case 1:
		if(year%4==0){
			document.write("This month 29 Days");
			break;
		}
		else{
			document.write("This month 28 Days");
			break;
		}
	case 2:
		document.write("This month 31 Days");
		break;
	case 3:
		document.write("This month 30 Days");
		break;
	case 4:
		document.write("This month 31 Days");
		break;
	case 5:
		document.write("This month 30 Days");
		break;
	case 6:
		document.write("This month 31 Days");
		break;
	case 7:
		document.write("This month 31 Days");
		break;
	case 8:
		document.write("This month 30 Days");
		break;
	case 9:
		document.write("This month 31 Days");
		break;
	case 10:
		document.write("This month 30 Days");
		break;
	case 11:
		document.write("This month 31 Days");
		break;
	
}