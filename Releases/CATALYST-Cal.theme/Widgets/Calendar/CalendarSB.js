function buildCal(m, y, cM, cH, cDW, cD){
var this_weekday_name2 = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")	//predefine weekday names
//var this_weekday_name_array = new Array("Su","Mo","Tu","We","Th","Fr","Sa")	//predefine weekday names
var this_weekday_name_array = ["Su","Mo","Tu","We","Th","Fr","Sa"];
var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
var dim=[31,0,31,30,31,30,31,31,30,31,30,31];

var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st

var todaydate=new Date() //DD added
//var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added
//------------------------define weekday------------------------------------------------------
var this_weekday = todaydate.getDay()	//extract weekday 0-6 (0=sun, 6=sat
var this_month = todaydate.getMonth()	//months start from 0-11, so current month needs to add one (0=Jan, 1=Feb,etc)
var this_date = todaydate.getDate()	//extract day of month
var this_year = todaydate.getYear()	//extract year
if (this_year < 2000){this_year = this_year + 1900;}
dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
var t = '';
/*
//'this_date('+this_date+')<br>this_weekday('+this_weekday+')<br>';
//--------------------------------------------------------------------------------------------
//------------------------
//Getting the date that the week starts on (include credit)-----------
//may not need this for what i'm looking for...
//only using Gregorian Calendar method
var this_century=parseInt(this_year/100);
var c_offset= ((39-this_century)%4)*2;
var d_offset=this_date%7;
var m_offset= [0,3,3,6,1,4,6,2,5,0,3,5];
var m2_offset=[6,2,3,6,1,4,6,2,5,0,3,5]; //leap year Jan=6, Feb=2
if(this_year%4==0 || this_year%100==0) m3_offset=m2_offset;
else m3_offset=m2_offset;
var y_str=this_year.toString();
var y_last2=y_str.substr(2,2); //find last 2 string of this year
var y2=y_last2*1; //convert from string into number
var y_offset=(y2+parseInt(y2/4))%7;

//var weekday_num=(c_offset+d_offset+m_offset[this_month]+y_offset)%7;
//var test_day_day=this_weekday_name2[weekday_num];
//t+='t_c=('+test_day_day+')<br>'; //all works so far (10:41 April 16th 2010)

var weekday2=(c_offset+d_offset+m3_offset[this_month]+y_offset)%7;
*/
days_TM=dim[this_month];
if (this_month==0)
	days_PM=dim[11];
else
	days_PM=dim[this_month-1];
if (this_month==11)
	days_NM=dim[0];
else
	days_NM=dim[this_month+1];
k=0;
do{
	k2=this_date-k;
	if(k2<=0)
		wkstart=days_PM+k2;
	else
		wkstart=k2;
//	t+='k('+k+')k2('+k2+')<br>';
	k++;
}while(k<=this_weekday)
//t+='dayspm('+days_PM+')wkstart['+wkstart+']<p>';
/*
j=0;
do{
	j2=this_date+j;
	if(j2>days_TM)
		j2=j2-days_TM;
	wkend=j2;
	j2_next=this_month+1;
	j++;	
}while(j<=6-this_weekday)
*/
//  End -->
//--------------------------------------------------------------------------------------------
//var t='<div id="'+cM+'"><table id="'+cM+'" cols="7" cellpadding="0" cellspacing="0"><tr align="center">';
//var t='<table id="'+cM+'"><tr>';

//all good (16:12 april 15 2010)------------------------------------------------------
//t+='<span style="font-family: helvetica;color:#ccff66;font-size:10px;font-weight:bold">';
//t+='print all variables: '+this_weekday_name_array[this_weekday]+' '+mn[this_month]+' '+this_date+' '+this_year;
//t+='</span>';
//------------------------------------------------------------------------------------
for (s=0;s<7;s++){
	if (s==this_weekday){
		t+='<span id="today">'+this_weekday_name_array[s]+'</span>';
	}
	else{
		t+='<span id="daysofweek">'+this_weekday_name_array[s]+'</span>';
	}
}
	t+='<span id="daysofweek"> | </span>';//<span id="today">'+this_date+'</spean>';
for (L=0;L<this_weekday;L++){
	L2=L+wkstart;
	if(L2>days_PM) L2=L2-days_PM;
	if(L2==this_date) t+='<span id="today">'+L2+'</span>';
	else t+='<span id="daysofweek">'+L2+'</span>';
}
for (M=0;M<=6-this_weekday;M++){
	M2=M+this_date;
	if(M2>days_TM) M2=M2-days_TM;	
	if (M2==this_date) t+='<span id="today">'+M2+'</span>';
	else t+='<span id="daysofweek">'+M2+'</span>';
}
/*-******************************************************************************
var w2 = dim[this_month-1]; //to calculate days in the prev month
var w3 = this_month+1; //this is the current month
// test code to prove the current date/time
	t+='week_start_month=('+week_start_month+')<p>';
	t+='last month has ('+w2+')days<p>';
	t+='this month is ('+w3+')<p>';
	t+='today is ('+scanfortoday+')';
//----------------------------------

for (uu=0;uu<7;uu++){
	uu3 = uu + week_start_day;
	if(uu3>w2){
		uu3 = uu3 - w2;
	}
	if(uu3==scanfortoday){t+='<span id="today">'+scanfortoday+'</span>';}
	else {t+='<span id="days">'+uu3+'</span>';}
}
*/
/*
//---there's a bug...dates keeps going after 28, 30, 31, etc...kinda fixed---
//------------------oh still not fixed----------------------------------
	var w = dim[this_month];
	for (u=0;u<7;u++){	
		u2 = u + week_start_day;
//		if (u2>w){u2=u2-w;}
		if (u2==scanfortoday){
			t+='<span id="today">'+scanfortoday+'</span>';}
	else{
		if(u2<=w){//this means dates will not display beyond the last day of the month, no matter what day it lands on.
			t+='<span id="days">'+u2+'</span>';}
		}
	}
*/
//t+='<span style="font-family: helvetica;color:#ccff66;font-size:20px;font-weight:bold">'+scanfortoday+'</span>';
t+='<div class="month">'+mn[this_month]+'</div>';
t+='<div class="year">'+this_year+'</div>';
return t;
}

