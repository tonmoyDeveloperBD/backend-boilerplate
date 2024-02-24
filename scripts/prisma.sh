#!/bin/bash

# Function to get the current Git branch
get_git_branch() {
  git branch --show-current 2>/dev/null
}

# Determine the default selection based on the Git branch
default_selection=$(get_git_branch)

# Show a menu using dialog
result=$(dialog --clear --backtitle "Choose Prisma Command" --title "Select Prisma Command" --menu "Choose a Prisma command:" 12 40 3 \
  1 "Prisma Generate" \
  2 "Prisma Studio" \
  3 "Prisma Push" \
  2>&1 >/dev/tty)

# Check the result and run the corresponding command
case $result in
  1)
    bash scripts/prisma_generate.sh
    ;;
  2)
    bash scripts/prisma_studio.sh
    ;;
  3)
    bash scripts/prisma_push.sh
    ;;
  *)
    echo "No selection made. Exiting."
    ;;
esac