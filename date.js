   //jshint esversion:6
   module.exports=getDate;
    function getDate(){
    let today =new Date();
    let currentday=today.getDay;
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
    }
    let day=today.toLocaleDateString("en-US",options);
    return day;
    }
