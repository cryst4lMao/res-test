/**
 * Created by Administrator on 2016/5/23.
 */
var audios = window["audios"] || {};
audios = {
    aud:'',
    play : function () {
        var basePath = "music/";
        var mp3snd = "aliee.mp3";
        var mp3snd2 = "bg.wav";
        var bkcolor = "000000";

        if ( $("#bd_audio_1").length > 0 ) {
            return false;
        }
        if(this.aud != ""){
            this.aud.play();
            return false;
        }

        if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
            $("body").append('<bgsound id="bd_audio_1" src="' + basePath + mp3snd2 + '" loop="-1">');
        }else {
            this.aud = new Audio();
            this.aud.src =  basePath + mp3snd;
            this.aud.loop = "loop";
            this.aud.load();
            setTimeout(function(){
                audios.aud.play();
            },300)

        }
    },
    bdBtn : function(_DOM){/* ��ͣ�Ĳ��� */
        $(_DOM).attr("status",'1');
        $("div").delegate(_DOM, "click", function(){
            var st = $(this).attr("status");
            if(st == '1'){
                if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
                    $("#bd_audio_1")[0].src="";
                }else{
                    audios.aud.pause(); /* ��ͣ */
                    $(".music").find('img').attr("src",'images/music.png');/* ��ͣ��ͼƬ ,music ��ͼƬ��class */
                }
                $(this).attr("status",'0');
            }else{
                $(this).attr("status",'1');
                /* ���ŵ�ͼƬ */$(".music").find('img').attr("src",'images/music.gif');

                audios.play();/* ���� */

            }
        });

    },
    stop : function(){
        $(".jp-video-play-icon").live("click",function(){

            if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
                $("#bd_audio_1")[0].src="";
            }else{
                audios.aud.pause();
            }

        });

    }

};
$(document).ready(function () { /* ��ʼ�� */
    audios.play();
    audios.bdBtn(".music");/* ��������� */
});