#!/usr/bin/env python

import flickrapi
import requests
import os
import re
import sys

FLICKR_KEY = "703974d4cb0b4847212c318ef8b8b756"
FLICKR_SECRET = "ecfff1ae58eecae3"
print "hello3"
USER_ID = sys.argv[1]
print "hello4"
SET_ID = sys.argv[2]
print "hello5"
#NUM_PHOTOS = int(raw_input("number of photos you want to see: "))

def make_url(photo):
    # url_template = "http://farm{farm-id}.staticflickr.com/
    #                 {server-id}/{id}_{secret}_[mstzb].jpg"
    photo['filename'] = "%(id)s_%(secret)s_z.jpg" % photo
    url = ("http://farm%(farm)s.staticflickr.com/%(server)s/%(filename)s"
           % photo)
    return url, photo['filename']

def main():
    #get new imaged from flickr
    print " ---> Requesting photos..."
    count = 0
    update = False
    flickr = flickrapi.FlickrAPI(FLICKR_KEY, FLICKR_SECRET)
    photos = flickr.walk_set(SET_ID)

    for photo in photos:
	if count == 10:
		break
        count += 1
	url, filename = make_url(photo.attrib)
        path = '/home/pi/photoframe/final/%s' % filename
        try:
            image_file = open(path)
            print " ---> Already have %s" % url
        except IOError:
            print " ---> Downloading %s" % url
            r = requests.get(url)
            image_file = open(path, 'w')
            image_file.write(r.content)
            image_file.close()
            update = True

    """
    #check to see if it needs to remove photos from folder
    filelist = os.listdir("/home/pi/photoframe/final")
    if count < len(filelist):
        print " ---> Removing photos"
        for f in filelist:
            pics = flickr.walk_set(SET_ID)
            print f
            for pic in pics:
                url, filename = make_url(pic.attrib)
                matchObj = re.match(f, filename)
                if matchObj:
                    print " ---> Found %s, matched %s" %(f,filename)
                    break
            else:
                print " ---> Deleting %s" %f
                os.remove("/home/pi/photoframe/final/%s" %f)
                update = True

    #if it added or removed a photo, update slideshow
    #if update == True:
        #print " ---> Restarting slideshow"
        #os.system("killall feh && /home/pi/bin/script_slideshow.sh")
"""

if __name__ == '__main__':
    main()
