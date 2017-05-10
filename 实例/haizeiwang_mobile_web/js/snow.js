/**
 * Created by Administrator on 2016/5/23.
 */
/**
 * js��ҳѩ��Ч��jquery���
 * ���˽�վ www.51xuediannao.com   ����
 * @see http://workshop.rs
 */
(function($){

    $.fn.snow = function(options){

        var defaults		= {
                Container:'body',
                minSize		: 10,		//ѩ������С�ߴ�
                maxSize		: 20,		//ѩ�������ߴ�
                newOn		: 1000,		//ѩ�����ֵ�Ƶ��
                content:'',
                documentHeight :$(document).height(),
                documentWidth :$(document).width(),
                flakeColor	: "#ff2727"	//���˽�վ www.51xuediannao.com   ����

            },
            options			= $.extend({}, defaults, options);

        var $flake 			= $('<div id="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html(options.content),
            documentHeight 	= options.documentHeight,
            documentWidth	= options.documentWidth;

        var interval		= setInterval( function(){
            var startPositionLeft 	= Math.random() * documentWidth - 100,
                startOpacity		= 0.5 + Math.random(),
                sizeFlake			= options.minSize + Math.random() * options.maxSize,
                endPositionTop		= documentHeight - 40,
                endPositionLeft		= startPositionLeft - 100 + Math.random() * 500,
                durationFall		= documentHeight * 10 + Math.random() * 5000;
            $flake.clone().appendTo(options.Container).css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                width: sizeFlake+'px',
                height: sizeFlake+'px',
                color: options.flakeColor
            }).animate({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.2
                },durationFall,'linear',function(){
                    $(this).remove()
                }
            );

        }, options.newOn);

    };

})(jQuery);