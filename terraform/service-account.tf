resource "google_service_account" "cloud_run" {
  account_id   = "cloud-run-resume"
  display_name = "Cloud Run - react-resume"
}
