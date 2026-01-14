#!/bin/bash
# This script calculates simple interest.
# Author: Upkar Lidder (IBM)
# Additional Authors: abelmulubrihan

echo "Enter the principal:"
read p
echo "Enter rate of interest per year:"
read r
echo "Enter time period in years:"
read t

s=`expr $p \* $t \* $r / 100`
echo "The simple interest is: "
echo $s
