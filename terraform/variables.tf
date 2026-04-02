variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "GCP region for Cloud Run and Artifact Registry"
  type        = string
  default     = "us-east1"
}

variable "image_tag" {
  description = "Docker image tag to deploy (use unique tags per build, e.g. git SHA)"
  type        = string
}
