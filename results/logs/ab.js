$(function() {

  var $vid1 = $("#video1"),
  $aud = $("#audio"),
      $aud1 = $("#audio1"),
      $aud2 = $("#audio2"),
      $aud3 = $("#audio3"),
      $aud4 = $("#audio4"),
      $pp  = $('#playpause'),
      $mu  = $('#mu'),
      $mu1 = $('#mu1'),
      $mu2 = $('#mu2'),
      $mu3 = $('#mu3'),
      $mu4 = $('#mu4'),
      $vol = $('#volume'),
      $vol1 = $('#volume1'),
      $vol2 = $('#volume2'),
      $vol3 = $('#volume3'),
      $vol4 =$('#volume4'),
      $vol5 =$('#volume5'),
      $bar = $("#progressbar"),
      VIDEO1= $vid1[0],
      AUDIO= $aud[0],
      AUDIO1= $aud1[0],
      AUDIO2= $aud2[0],
      AUDIO3= $aud3[0];
       AUDIO4= $aud4[0];
	VIDEO1.volume = 0.75;
  AUDIO.volume = 0.75;
  AUDIO.addEventListener("timeupdate", progress, false);
  AUDIO1.volume = 0.75;
  AUDIO1.addEventListener("timeupdate", progress, false);
  AUDIO2.volume = 0.75;
  AUDIO2.addEventListener("timeupdate", progress, false);
  AUDIO3.volume = 0.75;
  AUDIO3.addEventListener("timeupdate", progress, false);
  AUDIO4.volume = 0.75;
  AUDIO4.addEventListener("timeupdate", progress, false);
  function getTime(t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
  }
  
  function progress() {
    $bar.slider('value', ~~(100/AUDIO.duration*AUDIO.currentTime));
    $pp.text(getTime(AUDIO.currentTime));
  }

  $vol.slider( {
    value : AUDIO.volume*100,
    slide : function(ev, ui) {
      $vol.css({background:"hsla(180,"+ui.value+"%,50%,1)"});
      AUDIO.volume = ui.value/100; 
    } 
  });
  
  
  $vol1.slider( {
    value : AUDIO1.volume*100,
    slide : function(ev, ui) {
      $vol1.css({background:"hsla(180,"+ui.value+"%,50%,1)"});
      AUDIO1.volume = ui.value/100; 
    } 
  });
  
  $vol2.slider( {
    value : AUDIO2.volume*100,
    slide : function(ev, ui) {
      $vol2.css({background:"hsla(180,"+ui.value+"%,50%,1)"});
      AUDIO2.volume = ui.value/100; 
    } 
  });
  
  $vol3.slider( {
    value : AUDIO3.volume*100,
    slide : function(ev, ui) {
      $vol3.css({background:"hsla(180,"+ui.value+"%,50%,1)"});
      AUDIO3.volume = ui.value/100; 
    } 
  });
  
    $vol4.slider( {
    value : AUDIO4.volume*100,
    slide : function(ev, ui) {
      $vol4.css({background:"hsla(180,"+ui.value+"%,50%,1)"});
      AUDIO4.volume = ui.value/100; 
    } 
  });
    $bar.slider( {
    value : AUDIO.currentTime,
    slide : function(ev, ui) {
	 VIDEO1.currentTime = VIDEO1.duration/100*ui.value;   
        AUDIO.currentTime = AUDIO.duration/100*ui.value;
       AUDIO1.currentTime = AUDIO1.duration/100*ui.value;
       AUDIO2.currentTime = AUDIO2.duration/100*ui.value;
       AUDIO3.currentTime = AUDIO3.duration/100*ui.value;
       AUDIO4.currentTime = AUDIO4.duration/100*ui.value;
    }
  });
  
  $pp.click(function() {
    return AUDIO[AUDIO.paused?'play':'pause'](),
         AUDIO1[AUDIO1.paused?'play':'pause'](),
         AUDIO2[AUDIO2.paused?'play':'pause'](),
         AUDIO3[AUDIO3.paused?'play':'pause'](),
         AUDIO4[AUDIO4.paused?'play':'pause']()
	  VIDEO1[VIDEO1.paused?'play':'pause']();
  
  });
  
  $mu1.click(function() {
		if (AUDIO1.muted == false){ 
			AUDIO1.muted = true;
			$('button#mu1').addClass('muted');
		}
		else{ 
			AUDIO1.muted = false;
			$('button#mu1').removeClass('muted');
		}
	});
    
  $mu2.click(function() {
		if (AUDIO2.muted == false){ 
			AUDIO2.muted = true;
			$('button#mu2').addClass('muted');
		}
		else{ 
			AUDIO2.muted = false;
			$('button#mu2').removeClass('muted');
		}
	});
 
   $mu3.click(function() {
		if (AUDIO3.muted == false){ 
			AUDIO3.muted = true;
			$('button#mu3').addClass('muted');
		}
		else{ 
			AUDIO3.muted = false;
			$('button#mu3').removeClass('muted');
		}
	});
    
     $mu4.click(function() {
		if (AUDIO4.muted == false){ 
			AUDIO4.muted = true;
			$('button#mu4').addClass('muted');
		}
		else{ 
			AUDIO4.muted = false;
			$('button#mu4').removeClass('muted');
		}
	});
   $mu.click(function() {
		if (AUDIO.muted == false){ 
			AUDIO.muted = true;
			$('button#mu').addClass('muted');
		}
		else{ 
			AUDIO.muted = false;
			$('button#mu').removeClass('muted');
		}
	});
    
	

  
});
