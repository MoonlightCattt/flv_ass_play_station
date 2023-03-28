var the_title = '满舰饰假子直播回放 '
var now = new Date();
var ms = now.getTime() - timems;
var timed = new Date(ms);
var year = timed.getFullYear();
var month = timed.getMonth() + 1;
var date = timed.getDate();
var full_time = year * 10000 + month * 100 + date;
document.getElementById("top_title").innerHTML = the_title + full_time;
var video_url = '../video/' + full_time + '.flv';
var subtitle_url = '../video/' + full_time + '.ass';

window.__DATA__ = {
	video: {
		url: video_url,
		type: 'flv',
	},
	pic: null,
	subtitle: {
		url: subtitle_url,
		type: 'ass'
	}
};

window.__INIT__ = {};

(function() {
	window.__INIT__.dPlayer = new DPlayer({
		container: document.getElementById('dplayer'),
		screenshot: true,
		theme: '#66CCFF',
		playbackSpeed: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
		subtitle: window.__DATA__.subtitle,
		video: {
			url: window.__DATA__.video.url,
			type: window.__DATA__.video.type,
			pic: window.__DATA__.pic,
		},
		pluginOptions: {
			flv: {
				mediaDataSource: {},
				config: {},
			},
		},
	});

	window.__INIT__.dPlayer.on('subtitle_show', function() {
		window.__INIT__.dPlayer.notice("显示弹幕", 2000);
		console.log('subtitle_show');
		if (window.__INIT__.ass !== undefined) {
			window.__INIT__.ass.show();
		}
	});
	window.__INIT__.dPlayer.on('subtitle_hide', function() {
		window.__INIT__.dPlayer.notice("隐藏弹幕", 2000);
		if (window.__INIT__.ass !== undefined) {
			window.__INIT__.ass.hide();
		}
	});

	window.__INIT__.dPlayer.on('resize', function() {
		if (window.__INIT__.ass !== undefined) {
			document.getElementsByClassName('ASS-container')[0].style.width = '';
			document.getElementsByClassName('ASS-container')[0].style.height = '';
			window.__INIT__.ass.resize();
		}
	});
	window.onresize = function() {
		window.__INIT__.dPlayer.resize();
	};

	window.__INIT__.dPlayer.on('subtitle_change', function() {
		if (window.__INIT__.dPlayer !== undefined && window.__INIT__.dPlayer.subtitle.options.type ===
			'ass') {
			axios.get(window.__INIT__.dPlayer.subtitle.options.url).then(function(response) {
				if (window.__INIT__.ass !== undefined) {
					window.__INIT__.ass.destroy();
				}
				window.__INIT__.ass = new ASS(response.data, window.__INIT__.dPlayer.video, {
					container: window.__INIT__.dPlayer.container.getElementsByClassName(
						'dplayer-video-wrap')[0],
				});
			}).catch(function(error) {
				window.__INIT__.dPlayer.notice("外挂字幕加载失败: " + error, 6000);
			});
		}
	});
	window.__INIT__.dPlayer.events.trigger('subtitle_change');
})();
console.log(window.__INIT__.dPlayer.plugins.flv);
