function initPro() {
 var option1 = '',option3='';
 $.getJSON("../js/data.json",function(jsonData) {
  $.each(jsonData.diqu, function(index, indexItems) {
      //console.log(indexItems)
   option1 += "<option id=" + indexItems.id + ">"
     + indexItems.name + "</option>";
  });
  $("#provice").append(option1);
     
     //品牌
     $.each(jsonData.pinpai, function(index, indexItems) {
      //console.log(indexItems)
   option3 += "<option id=" + indexItems.id + ">"
     + indexItems.name + "</option>";
  });
  $("#provice1").append(option3);
     
     
     //地区
  $("#provice").bind("change", function() {
   selectCity(jsonData.diqu);
  })
  $("#provice1").bind("change", function() {
    selectCity1(jsonData.pinpai);
  }) 
    
 });
 function selectCity(data) {
  var option2 = '';
  var selectedIndex = $("#provice :selected").text();
  $("#selectCity").empty();
  if($("#provice :selected").val() == -1){
   $("#selectCity").append("<option id=\"-1\">请选择城市</option>");
  }
  $.each(data, function(index, indexItems) {
   var proName = indexItems.name;
   $.each(indexItems.items, function(index, indexItems) {
    if (indexItems.parentNode != selectedIndex) {
     return;
    } else {
     option2 += "<option id=" + indexItems.id + ">"
       + indexItems.name + "</option>";
    }
   })
  });
  $("#selectCity").append(option2);
 };
    
    
    //pinpai===
    
    function selectCity1(data) {
  var option2 = '';
  var selectedIndex = $("#provice1 :selected").text();
  $("#selectCity1").empty();
  if($("#provice1 :selected").val() == -1){
   $("#selectCity1").append("<option id=\"-1\">请选择</option>");
  }
  $.each(data, function(index, indexItems) {
   var proName = indexItems.name;
   $.each(indexItems.items, function(index, indexItems) {
    if (indexItems.parentNode != selectedIndex) {
     return;
    } else {
     option2 += "<option id=" + indexItems.id + ">"
       + indexItems.name + "</option>";
    }
   })
  });
  $("#selectCity1").append(option2);
 };
    
    
    
    
};
$(function() {
 initPro();
});