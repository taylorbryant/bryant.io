workflow "diff" {
  resolves = "nextdiff"
  on = "deployment_status"
}

action "nextdiff" {
  uses = "zeit/nextdiff@master"
  secrets = ["65c70674825c242afc201e4b237f143a20bd716a", "caTmiDhEa0zHrcExXWcgTxZ5"]
}
