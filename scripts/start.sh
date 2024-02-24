#!/bin/bash

# Function to get the current Git branch
get_git_branch() {
  git branch --show-current 2>/dev/null
}

# Determine the default selection based on the Git branch
# shellcheck disable=SC2034
default_selection=$(get_git_branch)


# Show a menu using dialog
result=$(dialog --clear --backtitle "Choose Environment" --title "Select Environment" --menu "Choose an environment:" 12 40 3 \
  1 "Local" \
  2 "Development" \
  3 "Production" \
  2>&1 >/dev/tty)

# Check the result and run the corresponding command
case $result in
  1)
    echo "Running Application for local database"
    dotenv -e .env.local -- nest start --watch
    ;;
  2)
    echo "Running Application for development database"
    dotenv -e .env.development --  nest start --watch
    ;;
  3)
    echo "Running Application for production database"
    dotenv -e .env.production -- node dist/main
    ;;
  *)
    echo "No selection made. Exiting."
    ;;
esac