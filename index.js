var DEFAULT_CATEGORY = 'all';
var DEFAULT_ACTION = 'click';
var DEFAULT_LABEL = '';

/**
 * @class ReactI13nGoogleAnalytics
 * @param {String} tracking id
 * @constructor
 */
var ReactI13nGoogleAnalytics = function (trackingId) {
    (function(p,l,o,w,i,n,g){
            if(!p[i]){
                p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
                p.GlobalSnowplowNamespace.push(i);
                p[i]=function(){
                    (p[i].q=p[i].q||[]).push(arguments)
                };
                p[i].q=p[i].q||[];
                n=l.createElement(o);
                g=l.getElementsByTagName(o)[0];
                n.async=1;
                n.src=w;
                g.parentNode.insertBefore(n,g)
            }
        }(window,document,"script","//d1fc8wv8zag5ca.cloudfront.net/2.5.2/sp.js","snowplow"));
        window.snowplow('newTracker', 'cf', 'd1k18xmqc2aaf0.cloudfront.net', { // Initialise a tracker
          appId: 'snwplow-01'
        });
};

/**
 * get plugin object
 * @method getPlugin
 * @return {Object} plugin object
 */
ReactI13nGoogleAnalytics.prototype.getPlugin = function () {
    return {
        name: 'snowplow',
        eventHandlers: {
            /**
             * pageview handler
             * @method pageview
             * @param {Object} payload payload object
             * @param {Object} payload.title page title
             * @param {Object} payload.url current url
             * @param {Function} calback callback function
             */
            pageview: function (payload, callback) {
                // ga('send', 'pageview', {
                //     page: payload.url,
                //     title: payload.title,
                //     hitCallback: callback
                // });
                snowplow('trackPageView',payload.title);
            },

            /**
             * pageview handler
             * @method pageview
             * @param {Object} payload payload object
             * @param {Object} payload.title page title
             * @param {Object} payload.url current url
             * @param {Function} calback callback function
             */
            click: function (payload, callback) {
                // var i13nNode = payload.i13nNode;
                // var params = ['send', 'event']
                // if (i13nNode) {
                //     var model = i13nNode.getMergedModel();
                //     params.push(model.category || DEFAULT_CATEGORY);
                //     params.push(model.action || DEFAULT_ACTION);
                //     params.push(model.label || i13nNode.getText(payload.target) || DEFAULT_LABEL);
                //     if (model.value) {
                //         params.push(model.value);
                //     }
                //     params.push({
                //         hitCallback: callback
                //     });
                //     ga.apply(this, params);
                // } else {
                //     callback();
                // }
            }
        }
    };
}

module.exports = ReactI13nGoogleAnalytics;
