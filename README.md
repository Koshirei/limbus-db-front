# limbus-db-front

front end for the limbus db project

image respository, back end repository and toolbox repository are private,
and access will be given only to trustworthy people. 

If you want access to any of these repositories, contact me.  

don't forget to setup your .env.development file, according to the template in .env



make webm: ffmpeg -i title.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -b:a 128k title_1.webm  
for index videos, try getting the final size under 1.5mb by switching up and down the -crf arg value 

make webp: ffmpeg -i MainUI_Lobby_new_2.png -c:v libwebp MainUI_Lobby_new_2.webp