
//objects for reference
const commandObj = {
  nameString: "dude",
  secretString: "secrettester",
  conString: "consoletester",
  auxString: 'auxtester',
  vtyString: 'vtypaswrod',
  vlanNumString: '1',
  vlanIPString: '192.168.2.2',
  vlanSubString: '255.255.255.0',
  switchGateString: '192.168.2.1',
  bannerInString: 'tester banner goes here',
  BannerCheck: true, //BANNER IS FALSE BY DEFAULT PROVIDING 
  VLanCheck : true, //VLAN CHECKER TO BE ONLY ACCESSIBLE VIA 
  RouterOrSwitch : true,
  dhcpPoolName: '',
  dhcpNetwork:'',
  dhcpExAddress:'',
  dhcpNetwork: '',
  dhcpDefaultRouter: '',
}
//object for refernce
const interfaceObj = {
  interNameString: 'interface name',
  interIpString: '192.168.5.5',
  interSubString: '255.255.255.0',
  interDescString: 'description test',
}

export function ipAddressChecker(...stringIP) {
  for (let i = 0; i < stringIP.length; i+=1) {
    const arrIn = stringIP[i].split('.');
    console.log(arrIn);
      if (arrIn.length !== 4) {
        console.log(`${arrIn} does not contain 4 octets!`)
        return;
      }
    arrIn.forEach(element => {
      if (isNaN(element)) {
        console.log(`${arrIn} contains a non-number!`)
        return;
      }
      let tester = parseInt(element)
      if (tester > 255 || tester < 0 ) {
        console.log('Ip address contains a number greater than 255 or less than 0');
        return
      }
    });
  }
}


export function CLIStringBuilder(commandObj) {
  let commandString = "";
  commandString += "enable" + "\r\n"  //so this is the "best practices"
    + "config t" + "\r\n"
    + "hostname " + commandObj.nameString + "\r\n" //device is named
    + "banner motd *" + "\r\n"
    + "Hello, this is " + commandObj.nameString + "\r\n"; //banner is created
  if (commandObj.bannerInString !== '') {
    commandString += commandObj.bannerInString + "*" + "\r\n";
  }
  else {
    commandString += "Authorized access only" + "\r\n"
      + "Activity on this device is monitored and recorded" + "\r\n"
      + "This information can and will be used in persecutions" + "\r\n"
      + "Have a nice day!*" + "\r\n";
  }
  commandString += "enable secret " + commandObj.secretString + "\r\n" //enable secret is set
    + "service password-encryption" + "\r\n"
    + "line con 0" + "\r\n"
    + "password " + commandObj.conString + "\r\n" //Console password is set
    + "login" + "\r\n"
    + "line vty 0 15" + "\r\n"
    + "password " + commandObj.vtyString + "\r\n" //vty password is set
    + "login" + "\r\n";

  if (commandObj.RouterOrSwitch === true) {
    commandString +=//Aux is set if Router is selected
      "line aux 0" + "\r\n"
      + "password " + commandObj.auxString + "\r\n"
      + "login" + "\r\n";
  }

  if(commandObj.dhcpPoolName !== ''){
    commandString +=//Aux is set if Router is selected
    "line aux 0" + "\r\n"
    + "password " + commandObj.auxString + "\r\n"
    + "login" + "\r\n";
  }

  commandString +=//end sequence for now
    "exit" + "\r\n"; //returns to priviledged exec prompt

  if (commandObj.RouterOrSwitch === false) { 
    commandString += "config t" + "\r\n"
      + "interface vlan" + commandObj.vlanNumString + "\r\n" //vlan# interface
      + "ip address " + commandObj.vlanIPString + " " + commandObj.vlanSubString + "\r\n" //ip address and sub created
      + "no shut" + "\r\n" //no shutdown
      + "exit" + "\r\n" //back to config t
      + "ip default-gateway " + commandObj.switchGateString + "\r\n"; //default gateway set
  }

  commandString +=//end sequence for now
    "exit" + "\r\n"; //back to priviledged exec prompt
  return commandString;
}



export function CLIInterfaceBuilder(interfaceObj) {
  let interfaceString = "";
  {
    interfaceString += "config t" + "\r\n"
      + "interface " + interfaceObj.interNameString + "\r\n"
      + "ip address " + interfaceObj.interIpString + " " + interfaceObj.interSubString + "\r\n"
      + "no shut" + "\r\n"
      + "description " + interfaceObj.interDescString + "\r\n"
      + "exit" + "\r\n";
  }
  document.execCommand("copy");
  return interfaceString;
}
