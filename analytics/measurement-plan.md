# TheTools.World Analytics And Measurement Plan

Analytics should measure usefulness without making privacy claims inaccurate.

## Setup

- Google Search Console: required after domain launch.
- Google Analytics 4: optional, add only when Privacy Policy reflects it.
- Microsoft Clarity or similar heatmap tool: optional, add only with privacy disclosure.
- Keep tools usable without account creation.

## Page-Level Tracking

Track:

- Page views.
- Landing page.
- Referrer/source.
- Device category.
- Country/region.
- Engagement time.
- Scroll depth if available.

## Tool Usage Events

Recommended event names:

- `tool_upload_selected`
- `tool_processing_started`
- `tool_processing_completed`
- `tool_processing_error`
- `tool_download_clicked`
- `tool_setting_changed`

Event properties:

- Tool route.
- Tool type.
- Output format.
- Target KB if provided.
- Error type, without storing file names or file content.

## Outbound Click Events

Track:

- Mailto contact clicks.
- External documentation links if added later.
- Future partner or distribution links.

## Future AdSense RPM Tracking

After AdSense approval:

- Page RPM.
- Impression RPM.
- Ad viewability.
- CTR by page type.
- Revenue by page cluster.
- UX impact after ad placement.

## Weekly Dashboard Metrics

- Search Console impressions.
- Search Console clicks.
- CTR.
- Average position.
- Indexed page count.
- Top landing pages.
- Tool start/completion rate.
- Error rate.
- Bounce or low-engagement pages.
- Pages with high impressions but low CTR.

## Decision Rules

- High impressions and low CTR: improve title/meta, not tool behavior first.
- High starts and low completions: improve UX, error handling, or performance.
- High search demand and weak ranking: improve content depth and internal links.
- Repeated queries not served by current pages: consider roadmap entry.
- Low-quality or ambiguous queries: avoid building pages.
