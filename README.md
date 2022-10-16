# PersonalWebsite

## To start
right click personal website folder,
open in terminal
code . #open VS Code

## in VS Code terminal
git pull #to check whether the latest?
npm start # to start a local host



## after finish updating, open a new bash, and (USE VS CODE UI INSTEAD)
### git add . (not update "package.json")
### git commit -m "你的任何comments"
### git push

## deploy the website to Github server
npm run deploy

#### 
ovid.u.washington.edu  
ssh user_name@host(IP/Domain_name)  


## UW Web hosting resources
https://itconnect.uw.edu/tools-services-support/storage-hosting/shared-hosting/  
https://itconnect.uw.edu/tools-services-support/storage-hosting/shared-hosting/ssh/  
https://itconnect.uw.edu/tools-services-support/storage-hosting/shared-hosting/web-development-environments/  
Your URL is http://faculty.washington.edu/lingwu


sftp lingwu@ovid.u.washington.edu

# everytime you want to push sth to server, do:   
npm run build   

# push build files to the server

    1. cd build
    2. sftp lingwu@ovid.u.washington.edu
    3. cd public_html
    4. put -r *