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
    echo "Running prisma STUDIO for local database"
    dotenv -e .env.local -- npx prisma studio
    ;;
  2)
    echo "Running prisma STUDIO for development database"
    dotenv -e .env.development -- npx prisma studio
    ;;
  3)
    echo "Running prisma STUDIO for production database"
    dotenv -e .env.production -- npx prisma studio
    ;;
  *)
    echo "No selection made. Exiting."
    ;;
esac