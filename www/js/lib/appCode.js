var email;
var USER_NAME = 5;
var found = false;
var yourBeacon;
var partyBeacon={major:-1000,minor:-1000};
var local_path = 'http://192.168.50.187:9999';
// var heroku_path = 'https://glacial-brook-7849.herokuapp.com';
var heroku_path = 'https://turnuptunein.herokuapp.com';
var errors="";


    //error handling;adding to error element or triggering pop up window 
    //to do 
    function myError(text){
      console.log(text);
      // window.alert(text);
      info = document.getElementById('beaconInfo');
      info.innerHTML = text;
    }


    function jsonCall(path,ext,object,callback)
    {
      $.ajax({
                    type: "GET", 
                    async: true,
                    dataType: 'json', 
                    // jsonp: 'callback', 
                    // jsonpCallback: 'callbackFunction', 
                    url: path+ext, //ext = '/qry'
                    data: object,
                    crossDomain: true,
                    success: function(json){
                        callback(json);
                    },
                    error: function(){
                        myError("cannot conect to the server");
                    }
                });

    }




    function myToArray(text){
      result=[];
      tmp = text.split(/[\s,:}{']/);
      for(var i=0;i < tmp.length;i++){
        if (tmp[i].length>0)
        {
          result.push(tmp[i]);
        }
      }
      return result;
    }

    function fetchEmail(array){
      result = [];
      for(var el in array){
        console.log(array[el]);
        if (array[el].indexOf('@')>0){
          result.push(array[el]);
        }
      }
      return result;
    }

    beaconFound = function(beacon,text,path){

    if ((beacon.major == partyBeacon.major) && (beacon.minor == partyBeacon.minor) && !found){
      ext = "/mobileApp/songs";
      info = {email:email,beaconMajor:beacon.major,beaconMinor:beacon.minor,action:'add'};
      jsonCall(heroku_path,ext,info,function(json){  
        found = true;
        info = document.getElementById('beaconInfo');
        info.innerHTML = "Party beacon found major: "+beacon.major;
        confo = json.confirmation;
        info.innerHTML = confo;
        yourBeacon = beacon;
        console.log(beacon);
      });
      // console.log(json);
      // alert("Party beacon found:"+beacon.major);
      // confo = json.confirmation;
      // added
      } 
    } 

    checkIfBeaconLost = function(beacon,beaconInfo,path){
  
      lost = true;

      for(var i=0;i < beaconInfo.beacons.length;i++){

        if (beaconInfo.beacons[i].major===beacon.major){
          lost = false;
        }
      };

      if (lost){
          ext = "/mobileApp/songs";
          info = {email:email,beaconMajor:beacon.major,beaconMinor:beacon.minor,action:'remove'};
          jsonCall(heroku_path,ext,info,function(json){
            info = document.getElementById('beaconInfo');
            confo = json.confirmation;
            info.innerHTML = confo;
            found = false;          
          });
          //add logic if connection is lost
          // alert('I lost you');  
      }
    };