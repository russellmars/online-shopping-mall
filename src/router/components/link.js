// reference https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
export default {
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean
  },
  render(h) {
    const router = this.$router;
    const href = router.parsePath(this.to);

    const handler = e => {
      if (guardEvent(e)) {
        if (this.replace) {
          location.replace(href);
        } else {
          location.href = href;
        }
      }
    };

    const on = { click: handler };

    const data = {};
    data.on = on;
    data.attrs = { href };

    return h("a", data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
  // don't redirect when preventDefault called
  if (e.defaultPrevented) return;
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) return;
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target)) return;
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}
