#!/bin/bash

# Function to get the current Git branch
get_git_branch() {
  git branch --show-current 2>/dev/null
}

# Determine the default selection based on the Git branch
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
    echo "Running push for local database"
    dotenv -e .env.local -- npx prisma db push
    ;;
  2)
    echo "Running push for development database"
    dotenv -e .env.development -- npx prisma db push
    ;;
  3)
    echo "Running push for production database"
    dotenv -e .env.production -- npx prisma db push
    ;;
  *)
    echo "No selection made. Exiting."
    ;;
esac