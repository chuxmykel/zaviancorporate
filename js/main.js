function changeServiceText(services){
  var option_index = services.selectedIndex;
  var option = services.options[option_index].value;

  switch(option) {
    case 'service1':
      document.getElementById('complemento').placeholder = 'Enter text for service1';
      break;
    case 'service2':
      document.getElementById('complemento').placeholder = 'Enter text for service2';
      break;
    case 'service3':
      document.getElementById('complemento').placeholder = 'Enter text for service3';
      break;
    case 'service4':
      document.getElementById('complemento').placeholder = 'Enter text for service4';
      break;
    case 'service5':
      document.getElementById('complemento').placeholder = 'Enter text for service5';
      break;
    case 'service6':
      document.getElementById('complemento').placeholder = 'Enter text for service6';
      break;
    case 'service7':
      document.getElementById('complemento').placeholder = 'Enter text for service7';
      break;
    default:
      document.getElementById('complemento').placeholder = 'Please, select a service';
  }
}
