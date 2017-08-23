#!/bin/bash

#Establishes connection with raspberry pi & execute masterscript remotely
sshpass -p 'password' ssh -o StrictHostKeyChecking=no pi@172.23.185.215 "pkill feh"
