SoundPile.Views.ShareItem = Backbone.CompositeView.extend({
  className: "share-item",
  template: JST["shares/show"],

  initialize: function () {
    var share = this.model;
    var trackItemView = new SoundPile.Views.TrackItem({ model: share.get("track") });
    this.addSubview('.track-item', trackItemView);
  },

  render: function () {
    // Defers most of the work to the TrackItem view
    var share = this.model;
    this.$el.html(this.template({ share: share }));
    this.attachSubviews();
    return this;
  },
});
