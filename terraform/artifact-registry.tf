resource "google_artifact_registry_repository" "resume" {
  repository_id = "react-resume"
  location      = var.region
  format        = "DOCKER"
  description   = "Docker repository for react-resume"

  cleanup_policies {
    id     = "keep-recent"
    action = "KEEP"

    most_recent_versions {
      keep_count = 3
    }
  }

  cleanup_policies {
    id     = "delete-old-tagged"
    action = "DELETE"

    condition {
      older_than = "604800s" # 7 days
      tag_state  = "TAGGED"
    }
  }

  cleanup_policies {
    id     = "delete-old-untagged"
    action = "DELETE"

    condition {
      older_than = "604800s" # 7 days
      tag_state  = "UNTAGGED"
    }
  }

  depends_on = [google_project_service.artifact_registry]
}
