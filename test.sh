#!/bin/bash

rm -rf /home/pi/photoframe/insta/*

#text=$1

python -m instaLooter hashtag ocean /home/pi/photoframe/insta -n 5

DISPLAY=:0.0 XAUTHORITY=/home/pi.Xauthority feh -Z -F -z -Y -D 2 /home/pi/photoframe/insta &
