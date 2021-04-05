function download(filename, text) {
    var input = document.createElement('a');
    input.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
  
    encodeURIComponent(text));
    input.setAttribute('download', filename);
  
    input.style.display = 'none';
    document.body.appendChild(input);
  
    input.click();
  
    document.body.removeChild(input);
  }
  
  function downloadText()
  {
      document.addtext.name.value = document.addtext.name.value;
  }
  