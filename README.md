# A map and infographics visualizing dam hazard in California
Created for [The CA Water Data Challenge](http://waterchallenge.data.ca.gov/)

Based on the data from [Dam's Within The Jurisdiction of the State of California](https://water.ca.gov/-/media/DWR-Website/Web-Pages/Programs/All-Programs/Division-of-safety-of-dams/Files/Publications/Dams-Within-Jurisdiction-of-the-State-of-California-2018-Alphabetically-by-Dam-Name.pdf)

___
### Instructions for deployment on Github Pages
\* _Currently there is a github organization, [dam-safety](https://github.com/dam-safety), and a repo there, [damss](https://github.com/dam-safety/damss)_

1. Do `npm run build` on the command line in your local directory where you the `dam` repo is located. This will run the React script to build the project.

2. Copy the contents of the `build` directory into the directory you have connected to the `damss` repo of the `dam-safety` organization.

3. Checkout a new branch on your local `damss` repo and commit everything you copied over from `dam/build`. Push it to the remote `damss`.

4. Go to the `damss` repo on Github and merge to master the branch you just pushed.

5. Voilà, your changes should deploy in a few minutes to [dam-safety.github.com/damss](https://dam-safety.github.com/damss)
    