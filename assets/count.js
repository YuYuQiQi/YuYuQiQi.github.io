$('#scissors_bt').click(function(){
    var countAfter = '';
    if($('#scissors_amount').text()>0){
      countAfter = (parseInt($('#scissors_amount').text())-1).toString();
      console.log(countAfter);
      $('#scissors_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      
    }
    else{
      $('#scissors_amount').text('0');
    }
  });

  $('#knife_bt').click(function(){
    var countAfter = '';
    if($('#knife_amount').text()>0){
      countAfter = (parseInt($('#knife_amount').text())-1).toString();
      console.log(countAfter);
      $('#knife_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#knife_amount').text('0');
    }
  });
  $('#ruler_bt').click(function(){
    var countAfter = '';
    if($('#ruler_amount').text()>0){
      countAfter = (parseInt($('#ruler_amount').text())-1).toString();
      console.log(countAfter);
      $('#ruler_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#ruler_amount').text('0');
    }
  });
  $('#marker_bt').click(function(){
    var countAfter = '';
    if($('#marker_amount').text()>0){
      countAfter = (parseInt($('#marker_amount').text())-1).toString();
      console.log(countAfter);
      $('#marker_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#marker_amount').text('0');
    }
  });
  $('#tape_bt').click(function(){
    var countAfter = '';
    if($('#tape_amount').text()>0){
      countAfter = (parseInt($('#tape_amount').text())-1).toString();
      console.log(countAfter);
      $('#tape_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#tape_amount').text('0');
    }
  });
  $('#dbtape_bt').click(function(){
    var countAfter = '';
    if($('#dbtape_amount').text()>0){
      countAfter = (parseInt($('#dbtape_amount').text())-1).toString();
      console.log(countAfter);
      $('#dbtape_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#dbtape_amount').text('0');
    }
  });
  $('#stereo_bt').click(function(){
    var countAfter = '';
    if($('#stereo_amount').text()>0){
      countAfter = (parseInt($('#stereo_amount').text())-1).toString();
      console.log(countAfter);
      $('#stereo_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#stereo_amount').text('0');
    }
  });
  $('#blStereo_bt').click(function(){
    var countAfter = '';
    if($('#blStereo_amount').text()>0){
      countAfter = (parseInt($('#blStereo_amount').text())-1).toString();
      console.log(countAfter);
      $('#blStereo_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#blStereo_amount').text('0');
    }
  });
  $('#cable_bt').click(function(){
    var countAfter = '';
    if($('#cable_amount').text()>0){
      countAfter = (parseInt($('#cable_amount').text())-1).toString();
      console.log(countAfter);
      $('#cable_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#cable_amount').text('0');
    }
  });
  $('#exCord_bt').click(function(){
    var countAfter = '';
    if($('#exCord_amount').text()>0){
      countAfter = (parseInt($('#exCord_amount').text())-1).toString();
      console.log(countAfter);
      $('#exCord_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#exCord_amount').text('0');
    }
  });
  $('#gun_bt').click(function(){
    var countAfter = '';
    if($('#gun_amount').text()>0){
      countAfter = (parseInt($('#gun_amount').text())-1).toString();
      console.log(countAfter);
      $('#gun_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#gun_amount').text('0');
    }
  });
  $('#ygBall_bt').click(function(){
    var countAfter = '';
    if($('#ygBall_amount').text()>0){
      countAfter = (parseInt($('#ygBall_amount').text())-1).toString();
      console.log(countAfter);
      $('#ygBall_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#ygBall_amount').text('0');
    }
  });
  $('#bat_bt').click(function(){
    var countAfter = '';
    if($('#bat_amount').text()>0){
      countAfter = (parseInt($('#bat_amount').text())-1).toString();
      console.log(countAfter);
      $('#bat_amount').text(countAfter);
      $('#count').text((parseInt($('#count').text())+1).toString());
      localStorage.setItem("totalCount", $('#count').text());
    }
    else{
      $('#bat_amount').text('0');
    }
  });