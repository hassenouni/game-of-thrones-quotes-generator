$(document).ready(function(){
  
  $.ajaxSetup({cache: false});
  
  console.log("ready");
  
  var currentQuote;
  var currentAuthor;
  var url;
  
  function getQuote()
  {
    $.ajax({
      url: "https://got-quotes.herokuapp.com/quotes",
      datatype: 'json',
      success: function(antwort){
        
        currentQuote = antwort.quote;
        currentAuthor = antwort.character;
        
        $("#quoteText").html(currentQuote);
        $("#quoteAuthor").html(currentAuthor);       
        
      }  
    });
  }
  
  getQuote();
  
  $("#getQuote").on("click", getQuote);
  
  $("#tweetQuote").on("click", function(){
    url = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor);
    window.open(url,'Share' ,'width=500, height=400, toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=0');
  });
  
  
});
