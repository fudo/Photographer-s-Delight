// Generated by CoffeeScript 1.4.0
(function() {
  var ImageCaption, root;

  ImageCaption = (function() {

    ImageCaption.prototype.options = {};

    ImageCaption.prototype.currentCaption = -1;

    ImageCaption.prototype.captions = [];

    ImageCaption.prototype.templates = {
      captionContainer: "<div></div>"
    };

    function ImageCaption(options) {
      options = options ? options : {};
      this.options = _.defaults(options, {
        captions: [],
        container: null,
        duration: 500
      });
      this.options.container = $(this.options.container);
      this.currentCaption = -1;
      this.captions = [];
      this._init();
    }

    ImageCaption.prototype.display = function(index) {
      var newImage, oldImage;
      if (this.currentCaption === index) {
        return;
      }
      newImage = this.captions[index];
      oldImage = this.captions[this.currentCaption];
      if (oldImage) {
        oldImage.animate({
          opacity: 0
        }, this.options.duration, function() {
          return oldImage.hide();
        });
      }
      newImage.show();
      newImage.animate({
        opacity: 1,
        useTranslate3d: true
      }, this.options.duration);
      return this.currentCaption = index;
    };

    ImageCaption.prototype._init = function() {
      var caption;
      this.captions = (function() {
        var _i, _len, _ref, _results;
        _ref = this.options.captions;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          caption = _ref[_i];
          _results.push($(this.templates.captionContainer).html(caption).attr("id", _.indexOf(this.options.captions, caption)).css({
            position: "absolute",
            opacity: 0,
            display: "none"
          }).appendTo(this.options.container));
        }
        return _results;
      }).call(this);
      return this.display(0);
    };

    return ImageCaption;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.ImageCaption = ImageCaption;

}).call(this);
