
//音乐时长
function musicTIME(music,name,I){
    music.oncanplay=function(){
        tTime=music.duration;
        var zm=Math.floor(tTime%3600/60);
        var zs=Math.floor(tTime%60);
        zm=zm>=10?zm:'0'+zm;
        zs=zs>=10?zs:"0"+zs;
        if(MDtime){
        MDtime.innerText=zm+":"+zs;
        musicPauseandPlay(music);
        }
      }
      music.ontimeupdate=function(){
          //当前播放进度
          var cTime=music.currentTime;
          var m=Math.floor(cTime%3600/60);
          var s=Math.floor(cTime%60);
          m=m>=10?m:'0'+m;
          s=s>=10?s:"0"+s;
          if(MZtime){
          MZtime.innerText=m+":"+s;
          }
          var value=cTime/tTime;
          JinDu.style.width=value*100+'%';
          Sname=name.split(/-/);
          Author=Sname[0];
          Namep=Sname[1];
          if(Namep==undefined){
            Namep=Sname[0];
            Author='未知歌手';
          }
          Dname.innerText=Namep;
          Dshou.innerText=Author;
          let AN=Author+'-'+Namep;
          let data = {l:I,src:music.src,age:cTime,all:tTime,name:AN};
          arrBonly(JSON.stringify(data));
        }
      }
      //暂停与播放
      function musicPauseandPlay(music){
          musicButton.onclick=function (){
          if(music.paused){
                music.play();
                musicPlay();
              }
            else {
                music.pause();
                musicPause();
              }
            }
          }
          //暂停与播放事件
          function musicPlay(){
              musicButton.style.backgroundImage = "url(./img/play.png)";
              }
            function musicPause(){
              musicButton.style.backgroundImage = "url(./img/pause.png)";
              }