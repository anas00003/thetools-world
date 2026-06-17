# GA4 Event Measurement Plan

Measurement ID: `G-63DE2LM99R`

## Base setup

- GA4 is installed with a lazy loader generated into the shared page head through `tools/build-site.js`.
- The external `gtag.js` script is not loaded during initial render. A small inline bootstrap defines `window.dataLayer`, a safe queuing `window.gtag`, and `window.ttwLoadGA()`.
- `window.ttwLoadGA()` injects `gtag.js` once on the first meaningful interaction or after the page load idle delay.
- Google Tag Manager is not used.
- AdSense is not added.
- The site should keep exactly one GA4 config call per public page.

## Event list

### `tool_upload_selected`

Trigger: user selects one or more files in a tool file input.

Safe parameters:

- `tool_id`
- `page_path`
- `input_type`
- `file_count`
- `file_ext`
- `file_size_bucket`

Do not track file names, file paths, or file content.

### `tool_process_start`

Trigger: user submits a compressor, resizer, converter, or bulk tool form.

Safe parameters:

- `tool_id`
- `page_path`
- `target_kb`
- `output_format`
- `width_bucket`
- `height_bucket`
- `file_count`

### `tool_process_success`

Trigger: processed output is prepared successfully.

Safe parameters:

- `tool_id`
- `page_path`
- `target_kb`
- `output_format`
- `output_size_bucket`
- `reduction_bucket`
- `processing_time_bucket`
- `file_count`

### `tool_process_error`

Trigger: the tool shows a safe error state.

Safe `error_type` values:

- `unsupported_file`
- `decode_failed`
- `processing_failed`
- `no_file_selected`
- `unknown`

Do not send raw error messages.

### `tool_result_download`

Trigger: user clicks a generated processed-result download link.

Safe parameters:

- `tool_id`
- `page_path`
- `target_kb`
- `output_format`
- `output_size_bucket`
- `reduction_bucket`
- `processing_time_bucket`

### `related_tool_click`

Trigger: user clicks an internal tool card.

Safe parameters:

- `source_page`
- `target_path`
- `link_text`

Use generic visible tool labels only.

## Bucket definitions

File size bucket:

- `under_100kb`
- `100kb_1mb`
- `1mb_5mb`
- `over_5mb`
- `unknown`

Output size bucket:

- `under_20kb`
- `20kb_50kb`
- `50kb_100kb`
- `100kb_200kb`
- `over_200kb`
- `unknown`

Reduction bucket:

- `under_25_percent`
- `25_50_percent`
- `50_75_percent`
- `over_75_percent`
- `unknown`

## Tool IDs

- `image_compressor`
- `image_resizer`
- `image_converter`
- `bulk_image_tools`
- `compress_image_to_20kb`
- `compress_image_to_50kb`
- `compress_image_under_100kb`
- `compress_image_under_200kb`
- `compress_jpg_to_20kb`
- `compress_jpg_to_50kb`
- `compress_jpg_to_100kb`
- `compress_jpg_to_200kb`
- `passport_photo_resizer`
- `resize_image_for_online_form`
- `compress_photo_for_government_form`
- `webp_to_jpg`
- `png_to_jpg`
- `jpg_to_png`

Fallback: safe slug from the URL path.

## What Not To Track

- Uploaded file names.
- Full local paths.
- Uploaded file content.
- Raw error messages.
- Emails, phone numbers, or user-entered free text.
- Exact user-provided personal values.
- AdSense or advertising interactions before ads exist.

## Custom Dimensions To Create Later

- `tool_id`
- `page_path`
- `target_kb`
- `output_format`
- `error_type`
- `file_size_bucket`
- `output_size_bucket`
- `reduction_bucket`

## Key Events To Consider Later

- `tool_process_success`
- `tool_result_download`
- `contact_submit` if a safe contact form is implemented later.

## GA4 Manual Setup Steps

1. Enable Enhanced Measurement in the GA4 web stream.
2. Deploy the site and wait for Vercel Ready.
3. Open `https://thetools.world/`.
4. Use Test installation, Realtime, DebugView, or Tag Assistant.
5. Test one compressor page and one converter page.
6. Avoid duplicate tags.
7. Do not add GTM yet.
