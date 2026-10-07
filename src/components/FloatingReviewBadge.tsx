import Script from "next/script";

export default function FloatingReviewBadge() {
  return (
    <>
      <Script
        src="https://reputationhub.site/reputation/assets/review-widget.js"
        strategy="lazyOnload"
      />
      <iframe
        className="lc_reviews_widget"
        src="https://reputationhub.site/reputation/widgets/review_widget/9xvnu89ORDnXefg4ArFH?widgetId=6ac6a948d5cfb3726b28739e"
        title="Recent Google reviews"
        loading="lazy"
        scrolling="no"
        style={{ minWidth: "100%", width: "100%", border: 0 }}
      />
    </>
  );
}
